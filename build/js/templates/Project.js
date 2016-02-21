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

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _reactMotion = require('react-motion');

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
      isEditing: false,
      showActiveSection: true,
      activeSection: 0,
      sections: [{
        title: "Header"
      }, {
        title: "Gallery"
      }, {
        title: "Details"
      }, {
        title: "Role"
      }, {
        title: "Tech"
      }]
    };
    return _this;
  }

  /* 
    Lifecycle
  */

  _createClass(Project, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var path = this.props.location.pathname;

      // Determine if New or Exisiting Project
      if (path.indexOf('work/new') != -1) {
        this.props.setProjectMode("CREATE");
      } else {
        this.props.setProjectMode("EDIT");
      }
    }
  }, {
    key: 'isEditing',
    value: function isEditing() {
      // Set Editing Mode
      this.setState({ isEditing: !this.state.isEditing });
    }

    /*
      Active Sections 
    */

  }, {
    key: 'setActiveSection',
    value: function setActiveSection(key) {
      this.setState({ activeSection: key });
    }

    /*
      Sidebar
    */

  }, {
    key: 'renderSidebar',
    value: function renderSidebar() {
      if (this.props.projectMode === "EDIT" && this.state.isEditing) {
        return _react2.default.createElement(_tabs2.default, { sections: this.state.sections,
          activeSection: this.state.activeSection,
          project: this.props.currentProject,
          linkState: this.props.linkState,
          mode: this.props.projectMode,
          addProject: this.props.addProject,
          updateProject: this.props.updateProject,
          setActiveSection: this.setActiveSection.bind(this),
          addGalleryImage: this.props.addGalleryImage,
          removeGalleryImage: this.props.removeGalleryImage });
      } else if (this.props.projectMode === "CREATE") {
        return _react2.default.createElement(_tabs2.default, { sections: this.state.sections,
          activeSection: this.state.activeSection,
          project: this.props.newProject,
          linkState: this.props.linkState,
          mode: this.props.projectMode,
          addProject: this.props.addProject,
          updateProject: this.props.updateProject,
          setActiveSection: this.setActiveSection.bind(this),
          addGalleryImage: this.props.addGalleryImage,
          removeGalleryImage: this.props.removeGalleryImage,
          showActiveSection: this.state.showActiveSection });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var p = this.props.projectMode === "EDIT" ? this.props.currentProject : this.props.newProject,
          sidebarClasses = this.state.isEditing || this.props.projectMode === "CREATE" ? "sidebar active" : "sidebar";

      return _react2.default.createElement(
        'div',
        { className: 'project' },
        _react2.default.createElement(
          'div',
          { className: sidebarClasses },
          this.renderSidebar()
        ),
        _react2.default.createElement(_ProjectPage2.default, { currentProject: p,
          isAuthenticated: false,
          projects: this.props.projects,
          mode: this.props.projectMode,
          isEditing: this.state.isEditing,
          edit: this.isEditing.bind(this),
          linkState: this.props.linkState,
          removeProject: this.props.removeProject,
          sections: this.state.sections,
          activeSection: this.state.activeSection,
          showActiveSection: this.state.showActiveSection })
      );
    }
  }]);

  return Project;
}(_react2.default.Component);

exports.default = Project;