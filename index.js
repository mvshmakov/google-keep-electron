require("nativefier").default(
	{
		name: "Google Keep",
		targetUrl: "https://keep.google.com/",
		version: "1.0.0",
		out: "./bin",
		overwrite: true,
		icon: "./icon.png",
		width: 1280,
		height: 800,
		minWidth: 600,
		minHeight: 400,
		showMenuBar: false,
		insecure: false,
		internalUrls: ".*accounts.google.com.*",
		userAgent:
			"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0",
		honest: false,
		zoom: 1.0,
		disableDevTools: false,
		singleInstance: true,
		clearCache: false,
		darwinDarkModeSupport: true,
		fileDownloadOptions: {
			saveAs: true,
		},
		win32metadata: {
			CompanyName: "Open source",
			FileDescription:
				"Cross-platform electron-powered desktop Google Keep",
			OriginalFilename: "Google Keep",
			ProductName: "Google Keep",
			InternalName: "Google Keep",
		},
	},
	(error, appPath) => {
		if (error) {
			console.error(error);
			return;
		}
		console.log("App has been build to", appPath);
	}
);
