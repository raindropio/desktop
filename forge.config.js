const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const fs = require('fs')

function updateVersion(version) {
    const package = fs.readFileSync(`${__dirname}/package.json`, 'utf-8')
    fs.writeFileSync(`${__dirname}/package.json`, package.replace(/version": "(.*)"/i, `version": "${version}"`), 'utf-8')
}

module.exports = {
    hooks: {
        generateAssets: async () => {
            //get app repo
            await exec('shx rm -rf out/app')
            await exec('git clone https://github.com/raindropio/app.git -b release/production out/app')

            //update version
            updateVersion(
                JSON.parse(fs.readFileSync(`${__dirname}/out/app/package.json`, 'utf-8')).version
            )

            //build app
            await exec('cd out/app && yarn && yarn build:electron')
            await exec('shx rm -rf app-bundle || true')
            await exec('shx cp -r out/app/dist/electron/prod app-bundle')
            await exec('shx rm -rf out/app')
        },
    },
    packagerConfig: {
        icon:               './build/icon',

        //mac specific
        appCategoryType:    'public.app-category.productivity',
        appCopyright:       '© 2013-2019 Mussabekov Rustem',
        appBundleId:        'io.raindrop.macapp',
        osxSign: {
            hardenedRuntime:    true,
            'gatekeeper-assess':   false,
            entitlements:       './build/mac/entitlements.mac.plist',
            'entitlements-inherit':'./build/mac/entitlements.mac.plist'
        },
        osxNotarize: {
            appleId:            process.env['APPLE_ID'],
            appleIdPassword:    process.env['APPLE_ID_PASSWORD']
        },

        //deeplink
        protocols:[{
            name: 'Raindrop-io-deeplink',
            schemes: ['rnio']
        }],
        
        asar:               true,
        prune:              true,
        ignore: [
            /^build$/,
            /^out$/,
            /^\.gitignore$/,
            /^\.git$/,
            /^forge\.config\.js$/,
            /^yarn\.lock$/,
            /^\.DS_Store$/,
        ],
    },
    makers: [
        {
            name: '@electron-forge/maker-zip',
            platforms: [
                'darwin'
            ]
        },
        {
            name: '@electron-forge/maker-dmg',
            config: arch=>({
                name:       `Raindrop-${arch}`,
                background: './build/mac/dmg@2x.png',
                format:     'ULFO',
                icon:       './build/icon.icns',
                iconSize:   128,
                overwrite:  true,
                contents: options => ([
                    {x: 530, y: 245, type: 'link', path: '/Applications'},
                    {x: 259, y: 245, type: 'file', path: options.appPath},
                ]),
                additionalDMGOptions: {
                    window: {size: {width: 780, height: 435}}
                },
            })
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                iconUrl:    'https://raindrop.io/favicon.ico',
                loadingGif: path.resolve(__dirname, 'build', 'win', 'loadingGif.gif'),
                setupIcon:  path.resolve(__dirname, 'build', 'icon.ico'),
                setupExe:   'RaindropInstaller.exe'
            }
        },
        {
            name: '@electron-forge/maker-appx',
            config: {
                verbose: true,
                identityName: '19059Raindrop.io.Raindrop.io',
                publisher: 'CN=49F50AA2-1546-4D45-BF61-BD9D748E1746',
                publisherDisplayName: 'Raindrop.io',
                packageDescription: 'All-in-one bookmark manager',
                assets: path.resolve(__dirname, 'build', 'win', 'appx', 'assets'),
                packageBackgroundColor: '#0F0F47',
                devCert: path.resolve(__dirname, 'build', 'win', 'appx', 'default.pfx'),
                // finalSay: async function() {
                //     const appxmanifest = path.resolve(__dirname, 'out', 'make', 'appx', 'x64', 'pre-appx', 'AppXManifest.xml')
                //     const xml = fs.readFileSync(appxmanifest, 'utf-8')
                //     fs.writeFileSync(
                //         appxmanifest, 
                //         xml
                //             .replace('runFullTrust', 'internetClient')
                //             .replace('Windows.FullTrustApplication', 'Raindrop.io.App'), 
                //         'utf-8'
                //     )
                // }
            }
        }
    ],
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'raindropio',
                    name: 'desktop'
                },
                draft: process.env['GITHUB_WORKFLOW'] ? false : true, //only github builds are publicly visible
                prerelease: false
            }
        }
    ]
}