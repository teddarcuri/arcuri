'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _ProjectGallery = require('./ProjectGallery');

var _ProjectGallery2 = _interopRequireDefault(_ProjectGallery);

var _ProjectActionBar = require('./ProjectActionBar');

var _ProjectActionBar2 = _interopRequireDefault(_ProjectActionBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectPage = function (_React$Component) {
  _inherits(ProjectPage, _React$Component);

  function ProjectPage(props) {
    _classCallCheck(this, ProjectPage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectPage).call(this, props));

    _this.state = {
      showGallery: true,
      confirmRemoveProject: false
    };
    return _this;
  }

  _createClass(ProjectPage, [{
    key: 'toggleConfirmBox',
    value: function toggleConfirmBox() {
      this.setState({ confirmRemoveProject: !this.state.confirmRemoveProject });
    }
  }, {
    key: 'renderProjectActionBar',
    value: function renderProjectActionBar() {
      if (this.state.confirmRemoveProject) {
        return _react2.default.createElement(_ProjectActionBar2.default, { confirmRemoveProject: this.props.removeProject,
          cancelRemove: this.toggleConfirmBox.bind(this) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var p = this.props.currentProject,
          overview = this.props.currentProject.description,
          role = this.props.currentProject.role,
          logo = p.logo ? _react2.default.createElement('img', { src: p.logo, alt: p.name, className: 'project-logo' }) : "",
          firstPhoto = Object.keys(this.props.currentProject.gallery)[0],
          sidebarClasses = this.state.isEditing ? "sidebar active" : "sidebar";

      return _react2.default.createElement(
        'div',
        { className: 'project-page' },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { component: "div",
            className: 'project-overview',
            transitionName: 'project-element',
            transitionAppear: true,
            transitionAppearTimeout: 0,
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 0 },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'h1',
              { className: 'title' },
              logo,
              p.name,
              _react2.default.createElement(
                'ul',
                { className: 'project-edit-tools' },
                _react2.default.createElement(
                  'li',
                  { onClick: this.props.edit },
                  _react2.default.createElement('img', { src: '/src/img/icons/edit-icon.svg' })
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: this.toggleConfirmBox.bind(this) },
                  _react2.default.createElement('img', { src: '/src/img/icons/close.svg' })
                )
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'tags' },
              _react2.default.createElement(
                'li',
                null,
                'Web'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Print'
              )
            )
          ),
          this.renderProjectActionBar(),
          _react2.default.createElement(
            'main',
            null,
            _react2.default.createElement(_ProjectGallery2.default, { project: this.props.currentProject }),
            _react2.default.createElement(
              'section',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'Overview'
              ),
              _react2.default.createElement(
                'p',
                null,
                overview
              )
            ),
            _react2.default.createElement(
              'aside',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'My Role'
              ),
              role,
              _react2.default.createElement(
                'h3',
                null,
                'Tech Used'
              ),
              role
            )
          )
        ),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { component: "div",
            className: 'project-bg',
            transitionName: 'fadeIn',
            transitionAppear: true,
            transitionAppearTimeout: 0,
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000 },
          _react2.default.createElement('img', { src: p.background })
        )
      );
    }
  }]);

  return ProjectPage;
}(_react2.default.Component);

exports.default = ProjectPage;