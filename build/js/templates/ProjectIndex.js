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

var _ProjectBubble = require('./ProjectBubble');

var _ProjectBubble2 = _interopRequireDefault(_ProjectBubble);

var _ProjectDiagonal = require('./ProjectDiagonal');

var _ProjectDiagonal2 = _interopRequireDefault(_ProjectDiagonal);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectIndex = function (_React$Component) {
	_inherits(ProjectIndex, _React$Component);

	function ProjectIndex(props) {
		_classCallCheck(this, ProjectIndex);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectIndex).call(this, props));
	}

	_createClass(ProjectIndex, [{
		key: 'renderBubbles',
		value: function renderBubbles(projects) {
			return _react2.default.createElement(
				_reactAddonsCssTransitionGroup2.default,
				{ className: 'project-bubbles',
					component: 'div',
					transitionAppear: true,
					transitionAppearTimeout: 0,
					transitionName: 'slideLeftIn',
					transitionEnterTimeout: 1000,
					transitionLeaveTimeout: 1000 },
				projects.map(function (p, key) {
					var path = "/work/" + p.name,
					    logoPath = p.logo,
					    bgImgPath = p.background,
					    styles = {
						backgroundImage: 'url(' + p.background + ')',
						backgroundSize: 'cover'
					};
					return _react2.default.createElement(_ProjectBubble2.default, { ref: key,
						key: "bubble" + key,
						path: path,
						name: p.name,
						logo: logoPath,
						background: bgImgPath,
						styles: styles });
				})
			);
		}
	}, {
		key: 'renderBars',
		value: function renderBars(projects) {
			return _react2.default.createElement(
				'div',
				{ className: 'project-bars' },
				projects.map(function (p, key) {
					var path = "/work/" + p.name,
					    logoPath = p.logo,
					    bgImgPath = p.background,
					    styles = {
						link: {
							position: "relative",
							zIndex: 9,
							width: "100%",
							padding: 10
						},
						background: {
							backgroundImage: 'url(' + p.background + ')',
							backgroundSize: 'cover',
							position: "absolute",
							top: 0,
							left: 0,
							opacity: "0.666",
							height: "100%",
							width: "100%",
							display: "block"
						}
					};
					return _react2.default.createElement(
						_reactRouter.Link,
						{ to: path, style: styles.link },
						_react2.default.createElement(
							'span',
							null,
							p.name
						),
						_react2.default.createElement('div', { className: 'background', style: styles.background })
					);
				})
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var projects = this.props.projects;

			if (this.props.filter === "WEB") {
				projects = _lodash2.default.filter(projects, { "id": 2 });
			}

			if (this.props.type === "BUBBLES") {
				return this.renderBubbles(projects);
			} else {
				return this.renderBars(projects);
			}
		}
	}]);

	return ProjectIndex;
}(_react2.default.Component);

exports.default = ProjectIndex;