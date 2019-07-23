const path = require("path");

module.exports = function(config) {
	"use strict";

	config.set({

		frameworks: ["ui5"],

		browsers: ["Chrome"],

		browserConsoleLogOptions: {
			level: "error"
		},

		ui5: {
			type: "application",
			paths: {
				// webapp: "webapp" // <-- works
				webapp: path.resolve(__dirname, "webapp") // <-- does not work
			}
		}

	});
};
