module.exports = {
    packagerConfig: {
        icon:               './build/icon',

        //mac specific
        appCategoryType:    'public.app-category.productivity',
        appCopyright:       '© 2013-2019 Mussabekov Rustem',
        appBundleId:        'io.raindrop.macapp',
        osxSign: true,
        osxNotarize: {
            appleId:            process.env['APPLE_ID'],
            appleIdPassword:    process.env['APPLE_ID_PASSWORD']
        },
        mac: {
            hardenedRuntime:    true,
            gatekeeperAssess:   false,
            entitlements:       './build/entitlements.mac.plist',
            entitlementsInherit:'./build/entitlements.mac.plist'
        },

        asar:               true,
        prune:              true,
        ignore: [
            /^build$/,
            /^out$/,
            /^\.gitignore$/,
            /^\.git$/,
            /^\.idea$/,
            /^forge\.config\.js$/,
            /^tsconfig\.json$/,
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
                background: './build/dmg@2x.png',
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
                draft: false,
                prerelease: false
            }
        }
    ]
}