const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
    hooks: {
        generateAssets: async () => {
            //build app from github repo
            await exec('git clone https://github.com/raindropio/app.git -b release/production out/app')
            await exec('cd out/app && yarn && yarn build:electron')
            await exec('rm -rf app-bundle || true && cp -r out/app/dist/electron/prod app-bundle && rm -rf out/app')
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
            config: {
                name:       'Raindrop',
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
            }
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                iconUrl:    'https://raindrop.io/favicon.ico',
                loadingGif: path.resolve(__dirname, 'build', 'win', 'loadingGif.gif'),
                setupIcon:  path.resolve(__dirname, 'build', 'icon.ico'),
                setupExe:   'RaindropInstaller.exe'
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