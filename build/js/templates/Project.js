'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _ProjectBar = require('./ProjectBar');

var _ProjectBar2 = _interopRequireDefault(_ProjectBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project(props) {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Project).call(this, props));
  }

  _createClass(Project, [{
    key: 'render',
    value: function render() {
      var p = this.props.currentProject;
      return _react2.default.createElement(
        'div',
        { className: 'project-page' },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { component: "div",
            transitionName: 'bubbleUp',
            transitionAppear: true,
            transitionAppearTimeout: 0,
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000 },
          _react2.default.createElement(
            'div',
            { className: 'project-window' },
            _react2.default.createElement(
              'h1',
              { className: 'title' },
              _react2.default.createElement('img', { src: p.logo, alt: p.name, className: 'project-logo' }),
              p.name
            ),
            _react2.default.createElement(
              'p',
              null,
              p.description
            )
          )
        ),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { component: "div",
            transitionName: 'slideUp',
            transitionAppear: true,
            transitionAppearTimeout: 0,
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000 },
          _react2.default.createElement(
            'div',
            { className: 'project-controls' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Overview'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Gallery'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Details'
              )
            ),
            _react2.default.createElement(_ProjectBar2.default, { projects: this.props.projects,
              currentProject: this.props.currentProject })
          )
        ),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { component: "div",
            className: 'project-bg',
            transitionName: 'fadeIn',
            transitionAppear: true,
            transitionAppearTimeout: 1000,
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000 },
          _react2.default.createElement('img', { src: p.background })
        )
      );
    }
  }]);

  return Project;
}(_react2.default.Component);

exports.default = Project;