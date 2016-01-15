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

var projects = [{
	id: 1,
	name: "Colorado.gov",
	types: ["Web"],
	roles: ["Front End Development"],
	images: ["images/stuff.jpg"],
	logo: "src/img/logos/co-logo.png",
	background: "src/img/backgrounds/colorado.jpg"
}, {
	id: 2,
	name: "Colorado Interactive",
	types: ["Brand"],
	roles: ["Designer"],
	images: ["images/stuff.jpg"],
	logo: "src/img/logos/ci-logo.png",
	background: "src/img/backgrounds/coloradointeractive.jpg"
}, {
	id: 3,
	name: "Colorado Governor",
	types: ["Web"],
	roles: ["Front End Development"],
	images: ["images/stuff.jpg"],
	logo: "src/img/logos/co-state-seal.png",
	background: "src/img/backgrounds/hickenlooper.jpg"
}];

var Project = function (_React$Component) {
	_inherits(Project, _React$Component);

	function Project(props) {
		_classCallCheck(this, Project);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Project).call(this, props));

		_this.state = {
			projects: projects,
			project: projects[0]
		};
		return _this;
	}

	_createClass(Project, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var id = this.props.params.name;
			this.setState({ project: this.findById(this.state.projects, id) });
		}
	}, {
		key: "findById",
		value: function findById(source, id) {
			for (var i = 0; i < source.length; i++) {
				if (source[i].name == id) {
					return source[i];
				}
			}
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "project-page" },
				_react2.default.createElement(
					"div",
					{ className: "project-sidebar" },
					_react2.default.createElement(
						"header",
						null,
						_react2.default.createElement(
							"h1",
							null,
							this.state.project.name
						),
						_react2.default.createElement("img", { src: this.state.project.background, className: "bg" })
					),
					_react2.default.createElement(
						"ul",
						null,
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"span",
								null,
								"Gallery"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"span",
								null,
								"Overview"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"span",
								null,
								"Details"
							)
						)
					)
				),
				_react2.default.createElement(
					"section",
					{ className: "project-content" },
					_react2.default.createElement(
						"div",
						{ className: "container" },
						_react2.default.createElement(
							"p",
							null,
							"Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						),
						_react2.default.createElement(
							"p",
							null,
							"Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						),
						_react2.default.createElement(
							"p",
							null,
							"Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						),
						_react2.default.createElement(
							"p",
							null,
							"Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						),
						_react2.default.createElement(
							"p",
							null,
							"Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						),
						_react2.default.createElement(
							"p",
							null,
							"Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						)
					)
				),
				_react2.default.createElement("img", { src: this.state.project.background, className: "bg" })
			);
		}
	}]);

	return Project;
}(_react2.default.Component);

exports.default = Project;