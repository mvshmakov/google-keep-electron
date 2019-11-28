require('nativefier')
    .default({
        name: 'Google Keep',
        targetUrl: 'https://keep.google.com/',
        version: '1.0.0',
        out: './bin',
        overwrite: true,
        icon: './icon.png',
        width: 1280,
        height: 800,
        showMenuBar: false,
        insecure: false,
        internalUrls: "(?:accounts|keep)\.google\.com/.*",
        honest: false,
        zoom: 1.0,
        singleInstance: true,
        clearCache: false,
        fileDownloadOptions: {
            saveAs: true
        },
        win32metadata: {
            CompanyName: 'Open source',
            FileDescription: 'Cross-platform electron-powered desktop Google Keep',
            OriginalFilename: 'Google Keep',
            ProductName: 'Google Keep',
            InternalName: 'Google Keep'
        }
    }, (error, appPath) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log('App has been build to', appPath);
});
