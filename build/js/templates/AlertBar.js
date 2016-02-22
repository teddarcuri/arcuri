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

var AlertBar = function (_React$Component) {
  _inherits(AlertBar, _React$Component);

  function AlertBar(props) {
    _classCallCheck(this, AlertBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AlertBar).call(this, props));
  }

  _createClass(AlertBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.hideAlertBar();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.hideAlertBar();
    }
  }, {
    key: 'hideAlertBar',
    value: function hideAlertBar() {
      var hide = setTimeout(function () {
        this.props.hideAlertBar();
      }.bind(this), 1000);

      clearTimeout(hide);
    }
  }, {
    key: 'render',
    value: function render() {
      var bgColor = this.props.config.type === "SUCCESS" ? "#bada55" : "#ff4040";
      var styles = {
        bar: {
          width: "100%",
          height: "25px",
          background: bgColor,
          color: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          transition: "all ease 0.5s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: this.props.config.active ? "translateY(0)" : "translateY(-100%)"
        },
        message: {
          margin: 0,
          fontSize: "13px",
          letterSpacing: "3px",
          textShadow: "2px 2px 2px rgba(0,0,0,0.25)",
          color: "#fff"
        }
      };
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { style: styles.bar,
          transitionAppear: true,
          transitionAppearTimeout: 2000,
          transitionName: 'fadeIn',
          transitionEnterTimeout: 2000,
          transitionLeaveTimeout: 2000 },
        _react2.default.createElement(
          'h1',
          { style: styles.message },
          _react2.default.createElement('i', { className: this.props.config.icon }),
          this.props.config.message
        )
      );
    }
  }]);

  return AlertBar;
}(_react2.default.Component);

exports.default = AlertBar;