module.exports = function(config) {
	"use strict";

	require("./karma.conf")(config);
	config.set({

		preprocessors: {
			"{webapp,webapp/!(test)}/*.js": ["coverage"]
		},

		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: "html",
					dir: "coverage"
				},
				{
					type: "text"
				}
			],
			check: {
				each: {
					statements: 100,
					branches: 100,
					functions: 100,
					lines: 100
				}
			}
		},

		customLaunchers: {
			sl_chrome: {
				base: "SauceLabs",
				browserName: "chrome",
				platform: "Windows 10",
				version: "latest"
		  	}
		},

		sauceLabs: {
			testName: 'max-playground'
		},

		reporters: ["progress", "coverage", "saucelabs"],

		// browsers: ["ChromeHeadless"],
		browsers: ["sl_chrome"],

		singleRun: true

	});
};
