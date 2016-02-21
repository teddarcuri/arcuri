'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add a method to strings to detect if they contain a substring
String.prototype.contains = function (s) {
	return this.indexOf(s) !== -1;
};

// Helper methods
var helpers = {
	saySup: function saySup(message) {
		alert(message);
	},

	findByTag: function findByTag(projects, tag) {
		_lodash2.default.filter(projects, function (p) {
			return _lodash2.default.find(p.tags, { name: tag });
		});
	}
};

exports.default = helpers;