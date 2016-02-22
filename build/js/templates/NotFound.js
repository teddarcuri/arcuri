'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_React$Component) {
	_inherits(NotFound, _React$Component);

	function NotFound() {
		_classCallCheck(this, NotFound);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(NotFound).apply(this, arguments));
	}

	_createClass(NotFound, [{
		key: 'render',
		value: function render() {
			var styles = {
				ul: {
					display: "flex",
					justifyContent: "space-between",
					listStyle: "none",
					padding: 0,
					margin: 0
				},
				a: {
					color: "#333",
					textTransform: "uppercase",
					":hover": {
						color: "#4682B4"
					}
				}
			};
			return _react2.default.createElement(
				_reactAddonsCssTransitionGroup2.default,
				{ transitionAppear: true,
					transitionAppearTimeout: 2000,
					transitionName: 'bubbleUp',
					transitionEnterTimeout: 2000,
					transitionLeaveTimeout: 2000,
					style: { textAlign: "center" } },
				_react2.default.createElement(
					'h1',
					null,
					'Page Not Found'
				),
				_react2.default.createElement(
					'ul',
					{ style: styles.ul },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ style: styles.a, to: 'about' },
							'About Me'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ style: styles.a, to: 'work' },
							'My Work'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ style: styles.a, to: 'experience' },
							' My Experience'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ style: styles.a, to: 'contact' },
							'Contact Me'
						)
					)
				),
				_react2.default.createElement('img', { src: './src/img/confused_travolta.gif', alt: '' })
			);
		}
	}]);

	return NotFound;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(NotFound);