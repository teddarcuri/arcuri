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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
		_inherits(About, _React$Component);

		function About() {
				_classCallCheck(this, About);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(About).apply(this, arguments));
		}

		_createClass(About, [{
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								_reactAddonsCssTransitionGroup2.default,
								{ transitionAppear: true,
										transitionAppearTimeout: 2000,
										transitionName: 'fadeIn',
										transitionEnterTimeout: 2000,
										transitionLeaveTimeout: 2000 },
								_react2.default.createElement(
										'div',
										{ className: 'container mw' },
										_react2.default.createElement(
												'div',
												null,
												_react2.default.createElement(
														_reactAddonsCssTransitionGroup2.default,
														{
																transitionAppear: true,
																transitionAppearTimeout: 2000,
																transitionName: 'bubbleUp',
																transitionEnterTimeout: 2000,
																transitionLeaveTimeout: 2000 },
														_react2.default.createElement(
																'h3',
																null,
																'Hello, My Name is ',
																_react2.default.createElement(
																		'span',
																		{ className: 'highlight light' },
																		'Tedd Arcuri'
																),
																'. I am designer + software developer Currently living in Denver, CO. I am seriously ',
																_react2.default.createElement(
																		'span',
																		{ className: 'highlight' },
																		'passionate'
																),
																' about delivering high ',
																_react2.default.createElement(
																		'span',
																		{ className: 'highlight' },
																		'quality products'
																),
																' that emphasize ',
																_react2.default.createElement(
																		'span',
																		{ className: 'highlight' },
																		'great user experience'
																),
																' and ',
																_react2.default.createElement(
																		'span',
																		{ className: 'highlight' },
																		'rich, interactive features'
																),
																'. Checkout some of ',
																_react2.default.createElement(
																		'span',
																		{ className: 'highlight' },
																		_react2.default.createElement(
																				_reactRouter.Link,
																				{ to: 'work' },
																				' My Work'
																		)
																),
																'. View my ',
																_react2.default.createElement(
																		'span',
																		{ className: 'highlight' },
																		_react2.default.createElement(
																				_reactRouter.Link,
																				{ to: 'contact' },
																				' Experience + Knowledge'
																		)
																),
																'. Like what you see? ',
																_react2.default.createElement(
																		'span',
																		{ className: 'highlight' },
																		_react2.default.createElement(
																				_reactRouter.Link,
																				{ to: 'contact' },
																				' Hire Me'
																		)
																),
																'.'
														)
												),
												_react2.default.createElement(
														'div',
														{ className: 'btns' },
														_react2.default.createElement(
																'a',
																{ className: 'btn' },
																'About Me'
														),
														_react2.default.createElement(
																'a',
																{ className: 'btn' },
																'See My Work'
														),
														_react2.default.createElement(
																'a',
																{ className: 'btn' },
																'Get In Touch'
														)
												)
										)
								),
								_react2.default.createElement('img', { id: 'about-image', src: '/src/img/background-scene.png' })
						);
				}
		}]);

		return About;
}(_react2.default.Component);

exports.default = About;