'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ProjectIndex = require('./ProjectIndex');

var _ProjectIndex2 = _interopRequireDefault(_ProjectIndex);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _LoadingOverlay = require('./LoadingOverlay');

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

var _colors = require('../utilities/colors');

var _colors2 = _interopRequireDefault(_colors);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));
  }

  _createClass(Dashboard, [{
    key: 'handleSubmit',
    value: function handleSubmit(ev) {
      ev.preventDefault();

      this.setState({ isLoading: true });

      var loginCredentials = {
        email: this.refs.email.value,
        password: this.refs.password.value
      };

      this.props.authenticate(loginCredentials);
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.props.unauthenticate();
    }
  }, {
    key: 'renderAuth',
    value: function renderAuth() {
      return _react2.default.createElement(
        'div',
        { key: 'dashboard' },
        _react2.default.createElement(
          'h1',
          null,
          'Dashboard'
        ),
        _react2.default.createElement(
          'h3',
          null,
          this.props.projects.length,
          ' Projects'
        ),
        _react2.default.createElement(_ProjectIndex2.default, { projects: this.props.projects })
      );
    }
  }, {
    key: 'renderUnAuth',
    value: function renderUnAuth() {
      var loadingOverlay = this.state.isLoading ? _react2.default.createElement(_LoadingOverlay2.default, null) : null;

      var form = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Are you me?'
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Let\'s find out.'
        ),
        _react2.default.createElement('input', { ref: 'email', type: 'text' }),
        _react2.default.createElement('input', { ref: 'password', type: 'password' }),
        _react2.default.createElement(
          'button',
          { style: this.getStyles().button, type: 'submit' },
          'Login'
        )
      );

      var success = _react2.default.createElement(
        'div',
        { style: { textAlign: "center" } },
        _react2.default.createElement(
          'span',
          { className: 'fa-lg fa-stack' },
          _react2.default.createElement('i', { style: { color: _colors2.default.successGreen }, className: 'fa fa-circle fa-stack-2x' }),
          _react2.default.createElement('i', { className: 'fa fa-check fa-stack-1x' })
        ),
        _react2.default.createElement(
          'h3',
          { style: { color: _colors2.default.successGreen } },
          'Sweet, everything seems to check out.'
        )
      );

      var content = form;
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { component: "form",
          style: { position: "relative" },
          key: 'login-form',
          onSubmit: this.handleSubmit.bind(this),
          transitionAppear: true,
          transitionAppearTimeout: 2000,
          transitionName: 'bubbleUp',
          transitionEnterTimeout: 2000,
          transitionLeaveTimeout: 2000 },
        loadingOverlay,
        content
      );
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      return {
        button: {
          border: "solid #000 2px",
          padding: 10,
          margin: "20px 0px",
          ":hover": {
            background: "#222"
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var pageContent = this.props.uid ? this.renderAuth() : this.renderUnAuth();
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { component: "div",
          transitionAppear: true,
          style: { maxWidth: "666px", width: "100%" },
          transitionAppearTimeout: 2000,
          transitionName: 'bubbleUp',
          transitionEnterTimeout: 2000,
          transitionLeaveTimeout: 2000 },
        pageContent
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(Dashboard);