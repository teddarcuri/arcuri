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

var ProjectBar = function (_React$Component) {
  _inherits(ProjectBar, _React$Component);

  function ProjectBar(props) {
    _classCallCheck(this, ProjectBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectBar).call(this, props));
  }

  _createClass(ProjectBar, [{
    key: 'renderNewProjectTab',
    value: function renderNewProjectTab() {
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/work/new' },
          _react2.default.createElement('img', { src: '/src/img/new-project-btn.jpg' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var p = this.props.currentProject,
          projects = this.props.projects,
          newProjectTab = this.props.uid ? this.renderNewProjectTab() : null;
      return _react2.default.createElement(
        'ul',
        { className: 'project-bar' },
        projects.map(function (p, key) {
          var path = "/work/" + p.name,
              logoPath = p.logo,
              bgImgPath = p.background,
              styles = {
            backgroundImage: 'url(' + p.background + ')',
            backgroundSize: 'cover'
          };
          return _react2.default.createElement(
            'li',
            { key: key },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: path },
              _react2.default.createElement('img', { src: p.background })
            )
          );
        }),
        newProjectTab
      );
    }
  }]);

  return ProjectBar;
}(_react2.default.Component);

exports.default = ProjectBar;