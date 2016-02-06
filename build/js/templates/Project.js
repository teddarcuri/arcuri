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

var _ProjectPage = require('./ProjectPage');

var _ProjectPage2 = _interopRequireDefault(_ProjectPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project(props) {
    _classCallCheck(this, Project);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Project).call(this, props));

    _this.state = {
      showGallery: true,
      isEditing: false,
      activeSection: 1,
      sections: [{
        title: "Header"
      }, {
        title: "Gallery"
      }, {
        title: "Details"
      }]
    };
    return _this;
  }

  _createClass(Project, [{
    key: 'showGallery',
    value: function showGallery() {
      this.setState({ showGallery: true });
    }
  }, {
    key: 'isEditing',
    value: function isEditing() {
      this.setState({ isEditing: !this.state.isEditing });
    }
  }, {
    key: 'renderSidebar',
    value: function renderSidebar() {
      if (this.state.isEditing) {
        return _react2.default.createElement(
          'form',
          { id: 'edit-project', onSubmit: this.props.updateProject },
          _react2.default.createElement(
            'h3',
            null,
            'Edit'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            placeholder: 'name',
            valueLink: this.props.linkState('currentProject.name')
          }),
          _react2.default.createElement('input', { ref: 'types',
            type: 'types',
            placeholder: 'types' }),
          _react2.default.createElement('input', { ref: 'background',
            type: 'background',
            placeholder: 'background',
            valueLink: this.props.linkState('currentProject.background') }),
          _react2.default.createElement('input', { ref: 'logo',
            type: 'logo',
            placeholder: 'logo',
            valueLink: this.props.linkState('currentProject.logo') }),
          _react2.default.createElement('textarea', { ref: 'description',
            name: 'description',
            valueLink: this.props.linkState('currentProject.description') }),
          _react2.default.createElement('textarea', { ref: 'myRole',
            name: 'my-role' }),
          _react2.default.createElement('textarea', { ref: 'techUsed',
            name: 'tech-used' }),
          _react2.default.createElement(
            'button',
            { type: 'submit' },
            'Update Project'
          )
        );
      } else {
        return;
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
        { className: 'project' },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { className: sidebarClasses,
            transitionAppear: true,
            transitionAppearTimeout: 0,
            transitionName: 'fadeIn',
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000 },
          this.renderSidebar()
        ),
        _react2.default.createElement(_ProjectPage2.default, { currentProject: this.props.currentProject,
          edit: this.isEditing.bind(this),
          linkState: this.props.linkState,
          removeProject: this.props.removeProject })
      );
    }
  }]);

  return Project;
}(_react2.default.Component);

exports.default = Project;