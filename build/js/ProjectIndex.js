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

var ProjectIndex = function (_React$Component) {
	_inherits(ProjectIndex, _React$Component);

	function ProjectIndex(props) {
		_classCallCheck(this, ProjectIndex);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectIndex).call(this, props));

		_this.state = {
			projects: _projectList2.default
		};
		return _this;
	}

	// componentWillAppear(callback) {
	// 	console.log("Project Index Appeared");
	//  this.animateIn();
	//  }

	//  componentWillEnter(callback) {
	//  	console.log("Project Index Entering");
	//  this.animateIn();
	//  }

	// componentWillLeave(callback) {
	// 	console.log("Project Index Leaving");
	// 	this.animateOut();
	// }

	_createClass(ProjectIndex, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log(this.refs);
		}
	}, {
		key: 'animateIn',
		value: function animateIn() {
			this.refs.projectBubbles.style.opacity = "1";
		}
	}, {
		key: 'animateOut',
		value: function animateOut() {
			this.refs.projectBubbles.style.opacity = "0";
		}
	}, {
		key: 'render',
		value: function render() {
			var projects = this.state.projects;
			return _react2.default.createElement(
				'div',
				{ className: 'project-bubbles', ref: 'projectBubbles' },
				projects.map(function (p) {
					var path = "work/" + p.name,
					    logoPath = p.logo,
					    bgImgPath = p.background;
					return _react2.default.createElement(
						_reactRouter.Link,
						{ ref: p.id, key: p.id, to: path, className: 'project-bubble' },
						_react2.default.createElement('img', { className: 'logo', src: logoPath }),
						_react2.default.createElement('img', { className: 'bg', src: bgImgPath })
					);
				})
			);
		}
	}]);

	return ProjectIndex;
}(_react2.default.Component);

exports.default = ProjectIndex;