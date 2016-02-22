'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingOverlay = function (_React$Component) {
	_inherits(LoadingOverlay, _React$Component);

	function LoadingOverlay() {
		_classCallCheck(this, LoadingOverlay);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadingOverlay).apply(this, arguments));
	}

	_createClass(LoadingOverlay, [{
		key: 'render',
		value: function render() {
			var styles = {
				overlay: {
					background: "#eee",
					width: "100%",
					height: "100%",
					position: "absolute",
					top: 0, left: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				},
				dot: {
					background: this.props.color ? this.props.color : "#111"
				}
			};
			return _react2.default.createElement(
				_reactAddonsCssTransitionGroup2.default,
				{ transitionAppear: true,
					transitionAppearTimeout: 2000,
					transitionName: 'fadeIn',
					transitionEnterTimeout: 2000,
					transitionLeaveTimeout: 2000,
					style: styles.overlay },
				_react2.default.createElement(
					'div',
					{ className: 'spinner' },
					_react2.default.createElement('div', { style: styles.dot, className: 'dot1' }),
					_react2.default.createElement('div', { style: styles.dot, className: 'dot2' })
				)
			);
		}
	}]);

	return LoadingOverlay;
}(_react2.default.Component);

exports.default = LoadingOverlay;