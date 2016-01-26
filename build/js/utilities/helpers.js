"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

// Add a method to strings to detect if they contain a substring
String.prototype.contains = function (s) {
	return this.indexOf(s) !== -1;
};

// Helper methods
var helpers = {
	saySup: function saySup(message) {
		alert(message);
	}
};

exports.default = helpers;