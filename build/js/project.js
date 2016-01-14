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
	logo: "images/stuff.jpg",
	background: "images/stuff.jpg"
}, {
	id: 2,
	name: "Colorado Governor",
	types: ["Web"],
	roles: ["Front End Development"],
	images: ["images/stuff.jpg"],
	logo: "images/stuff.jpg",
	background: "images/stuff.jpg"
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
				"h1",
				null,
				this.state.project.name
			);
		}
	}]);

	return Project;
}(_react2.default.Component);

exports.default = Project;