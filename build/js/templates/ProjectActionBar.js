"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectActionBar = function (_React$Component) {
	_inherits(ProjectActionBar, _React$Component);

	function ProjectActionBar() {
		_classCallCheck(this, ProjectActionBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectActionBar).apply(this, arguments));
	}

	_createClass(ProjectActionBar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "project-action-bar" },
				_react2.default.createElement(
					"h3",
					null,
					"And you're, like, TOTALLY sure about this?"
				),
				_react2.default.createElement(
					"button",
					{ className: "delete-btn", onClick: this.props.confirmRemoveProject },
					"Confirm Deletion"
				),
				_react2.default.createElement(
					"button",
					{ onClick: this.props.cancelRemove },
					"Nevermind"
				)
			);
		}
	}]);

	return ProjectActionBar;
}(_react2.default.Component);

exports.default = ProjectActionBar;