'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _projectList = require('./project-list');

var _projectList2 = _interopRequireDefault(_projectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
	_inherits(Projects, _React$Component);

	function Projects(props) {
		_classCallCheck(this, Projects);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Projects).call(this, props));
	}

	_createClass(Projects, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log(this.refs);
			this.refs.derp.style.background = "red";
		}

		// componentWillAppear(callback) {
		// 	setTimeout(callback, 2000);
		// 	console.log(this.refs.childRoute);
		// 	this.refs.childRoute.animateIn();
		// }

		// componentWillEnter(callback) {
		// 	console.log(this.refs.childRoute + " is entering");
		// 	setTimeout(callback, 2000)
		// 	this.refs.childRoute.animateIn();
		// }

		// componentWillLeave(callback) {
		// 	console.log(this.refs.childRoute + " is leaving");
		// 	setTimeout(callback, 2000)
		// 	this.refs.childRoute.animateOut();
		// }

	}, {
		key: 'render',
		value: function render() {
			var key = this.props.location.pathname;
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactAddonsTransitionGroup2.default,
					{ ref: 'derp' },
					_react2.default.cloneElement(this.props.children, {
						key: key,
						ref: "childRoute"
					})
				)
			);
		}
	}]);

	return Projects;
}(_react2.default.Component);

exports.default = Projects;