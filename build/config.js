exports.default = ()=>({
    appId: 'io.raindrop.macapp',

    beforePack: 'build/webapp.js',

    //Include
    files: [
        'src/**/*',
        'webapp/dist/electron/prod/**/*'
    ],

    //Deep-links
    protocols: [
        {
            'name': 'Raindrop-io-deeplink',
            'schemes': ['rnio']
        }
    ],

    //macOS
    mac: {
        category: 'public.app-category.productivity',
        entitlements: 'build/mac/entitlements.mac.plist',
        entitlementsInherit: 'build/mac/entitlements.mac.plist',
        icon: 'build/mac/icon.icns',
        darkModeSupport: true,
        forceCodeSigning: true,
        artifactName: 'Raindrop.io-darwin-${arch}-${version}.${ext}',
        target: [{
            target: 'default',
            arch: ['x64', 'arm64']
        }],
        notarize: {
            teamId: '7459JWM5TY'
        }
    },
    dmg: {
        artifactName: 'Raindrop-${arch}.${ext}',
        background: 'build/mac/dmg@2x.png',
        iconSize: 128,
        format: 'UDBZ',
        contents: [
            {
                x: 530,
                y: 245,
                type: 'link',
                path: '/Applications'
            },
            {
                x: 259,
                y: 245,
                type: 'file'
            }
        ],
        window: {
            width: 780,
            height: 435
        }
    },
    
    //Windows
    win: {
        icon: 'build/win/icon.ico',
        target: [
            {
                target: 'squirrel',
                arch: ['x64']
            }, 
            {
                target: 'appx',
                arch: ['x64', 'arm64']
            }
        ]
    },
    squirrelWindows: {
        iconUrl: 'https://raindrop.io/favicon.ico',
        loadingGif: 'build/win/loadingGif.gif'
    },
    appx: {
        backgroundColor: '#0F0F47',
        //windows store:
        applicationId: 'Raindrop.io.Raindrop.io',
        identityName: '19059Raindrop.io.Raindrop.io',
        publisher: 'CN=49F50AA2-1546-4D45-BF61-BD9D748E1746',
        publisherDisplayName: 'Raindrop.io',

        // or special unsigned appx, in powershell `add-appxpackage -path C:\appx.appx -AllowUnsigned`
        // identityName: 'NumberGuesserManifest',
        // publisher: 'CN=AppModelSamples, OID.2.25.311729368913984317654407730594956997722=1'
    },

    //Linux
    linux: {
        executableName: 'raindrop',
        icon: 'build/linux',
        category: 'GNOME;GTK;Network;Education;Science',
        target: ['snap'],
        desktop: {
            StartupWMClass: 'Raindrop.io',
            MimeType: 'x-scheme-handler/rnio'
        }
    },

    snap: {
        artifactName: 'Raindrop-${arch}.${ext}'
    }
})