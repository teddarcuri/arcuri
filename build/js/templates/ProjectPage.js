'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _ProjectGallery = require('./ProjectGallery');

var _ProjectGallery2 = _interopRequireDefault(_ProjectGallery);

var _ProjectIndex = require('./ProjectIndex');

var _ProjectIndex2 = _interopRequireDefault(_ProjectIndex);

var _ProjectActionBar = require('./ProjectActionBar');

var _ProjectActionBar2 = _interopRequireDefault(_ProjectActionBar);

var _showdown = require('showdown');

var _showdown2 = _interopRequireDefault(_showdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectPage = function (_React$Component) {
  _inherits(ProjectPage, _React$Component);

  function ProjectPage(props) {
    _classCallCheck(this, ProjectPage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectPage).call(this, props));

    _this.converter = new _showdown2.default.Converter();

    _this.state = {
      showGallery: true,
      confirmRemoveProject: false
    };
    return _this;
  }

  _createClass(ProjectPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // Create Active Window Div
      this.createActiveWindow();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      // Create Active Window Div
      this.createActiveWindow();
    }
  }, {
    key: 'createActiveWindow',
    value: function createActiveWindow() {
      if (!document.getElementById('active-window')) {
        var activeWindow = document.createElement('div');
        activeWindow.id = "active-window";
        document.body.appendChild(activeWindow);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Determine active section to highlight
      this.setActiveSection(this.props.activeSection);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // Determine active section to highlight
      this.setActiveSection(this.props.activeSection);
    }

    /*
      Highlight Active Section 
    */

  }, {
    key: 'setActiveSection',
    value: function setActiveSection(section) {

      var el;

      switch (this.props.activeSection) {
        case 0:
          el = _reactDom2.default.findDOMNode(this.refs.header);
          break;
        case 1:
          el = _reactDom2.default.findDOMNode(this.refs.gallery);
          break;
        case 2:
          el = _reactDom2.default.findDOMNode(this.refs.details);
          break;
        case 3:
          el = _reactDom2.default.findDOMNode(this.refs.role);
          break;
        default:
          return;
      }

      // highlight active section if editing or creating
      var activeWindow = document.getElementById("active-window");
      if (this.props.isEditing || this.props.mode === "CREATE") {
        activeWindow.classList.add('active');
        el.appendChild(activeWindow);
      } else {
        activeWindow.classList.remove('active');
      }
    }
  }, {
    key: 'toggleConfirmBox',
    value: function toggleConfirmBox() {
      this.setState({ confirmRemoveProject: !this.state.confirmRemoveProject });
    }
  }, {
    key: 'renderGallery',
    value: function renderGallery() {
      if (Object.keys(this.props.currentProject.gallery).length) {
        return _react2.default.createElement(_ProjectGallery2.default, { ref: 'gallery',
          project: this.props.currentProject,
          'data-section': 'gallery' });
      }
    }
  }, {
    key: 'renderEditTools',
    value: function renderEditTools() {
      if (this.props.mode === "EDIT" && this.props.isAuthenticated) {
        return _react2.default.createElement(
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
        );
      }
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
    key: 'renderOverview',
    value: function renderOverview() {
      if (this.props.currentProject.description) {
        return { __html: this.converter.makeHtml(this.props.currentProject.description) };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var p = this.props.currentProject,
          role = this.props.currentProject.role,
          logo = p.logo ? _react2.default.createElement('img', { src: p.logo, alt: p.name, className: 'project-logo' }) : "";

      return _react2.default.createElement(
        'div',
        { className: 'project-page' },
        _react2.default.createElement(
          'div',
          { className: 'project-overview' },
          _react2.default.createElement(
            'header',
            { ref: 'header',
              'data-section': 'header' },
            _react2.default.createElement(
              'h1',
              { className: 'title' },
              logo,
              p.name,
              this.renderEditTools()
            )
          ),
          this.renderProjectActionBar(),
          _react2.default.createElement(
            'main',
            null,
            _react2.default.createElement(
              'div',
              { className: 'project-infobar' },
              _react2.default.createElement(
                'ul',
                { className: 'tags' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Web',
                  _react2.default.createElement(_ProjectIndex2.default, { projects: this.props.projects,
                    type: 'BARS' })
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Print',
                  _react2.default.createElement(_ProjectIndex2.default, { projects: this.props.projects,
                    type: 'BUBBLES' })
                )
              ),
              _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'google.com' },
                  'View Site'
                )
              ),
              _react2.default.createElement(
                'span',
                null,
                'May 2015'
              )
            ),
            this.renderGallery(),
            _react2.default.createElement('section', { ref: 'details',
              'data-section': 'details',
              dangerouslySetInnerHTML: this.renderOverview() })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'project-bg' },
          _react2.default.createElement('img', { src: p.background })
        )
      );
    }
  }]);

  return ProjectPage;
}(_react2.default.Component);

exports.default = ProjectPage;