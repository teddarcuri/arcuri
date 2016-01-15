'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

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

var Projects = function (_React$Component) {
	_inherits(Projects, _React$Component);

	function Projects(props) {
		_classCallCheck(this, Projects);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Projects).call(this, props));

		_this.state = {
			projects: projects
		};
		return _this;
	}

	_createClass(Projects, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var projects = this.state.projects;
			return _react2.default.createElement(
				'div',
				null,
				projects.map(function (p) {
					var path = "work/" + p.name,
					    logoPath = p.logo,
					    bgImgPath = p.background;
					return _react2.default.createElement(
						_reactRouter.Link,
						{ to: path, className: 'project-bubble' },
						_react2.default.createElement('img', { className: 'logo', src: logoPath }),
						_react2.default.createElement('img', { className: 'bg', src: bgImgPath })
					);
				})
			);
		}
	}]);

	return Projects;
}(_react2.default.Component);

exports.default = Projects;