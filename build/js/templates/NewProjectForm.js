'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectPage = require('./ProjectPage');

var _ProjectPage2 = _interopRequireDefault(_ProjectPage);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewProjectForm = function (_React$Component) {
  _inherits(NewProjectForm, _React$Component);

  function NewProjectForm(props) {
    _classCallCheck(this, NewProjectForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewProjectForm).call(this, props));

    _this.state = {
      currentTab: 0,
      tabs: [{
        title: "Header"
      }, {
        title: "Gallery"
      }, {
        title: "Details"
      }]
    };
    return _this;
  }

  // Send the new project off to the App

  _createClass(NewProjectForm, [{
    key: 'createProject',
    value: function createProject(ev) {

      ev.preventDefault();

      var project = {
        name: this.refs.name.value,
        background: this.refs.background.value,
        logo: this.refs.logo.value,
        types: this.refs.types.value,
        description: this.refs.description.value,
        gallery: {
          image1: {
            path: "/src/img/gallery_images/colorado_gov/contact.png"
          }
        }
      };

      // Add to project to state
      this.props.addProject(project);
    }
  }, {
    key: 'showHeaderTab',
    value: function showHeaderTab() {
      return _react2.default.createElement(
        'div',
        { className: 'details' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'name' },
          'Name'
        ),
        _react2.default.createElement('input', { ref: 'name',
          name: 'name',
          type: 'text',
          placeholder: 'name',
          name: 'name',
          valueLink: this.props.linkState('newProject.name') }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'logo' },
          'Logo'
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex' },
          _react2.default.createElement('img', { className: 'thumb', src: this.props.newProject.logo }),
          _react2.default.createElement('input', { ref: 'logo',
            type: 'logo',
            placeholder: 'logo',
            name: 'logo',
            valueLink: this.props.linkState('newProject.logo') })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'background' },
          'Background'
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex' },
          _react2.default.createElement('img', { className: 'thumb', src: this.props.newProject.background }),
          _react2.default.createElement('input', { ref: 'background',
            type: 'background',
            placeholder: 'background',
            name: 'background',
            valueLink: this.props.linkState('newProject.background') })
        )
      );
    }
  }, {
    key: 'showDetailsTab',
    value: function showDetailsTab() {
      return _react2.default.createElement(
        'div',
        { className: 'details' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'types' },
          'Types'
        ),
        _react2.default.createElement('input', { ref: 'types',
          type: 'types',
          placeholder: 'types' }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'description' },
          'Description'
        ),
        _react2.default.createElement('textarea', { name: 'description',
          ref: 'description',
          id: '',
          cols: '30',
          rows: '10',
          valueLink: this.props.linkState('newProject.description') })
      );
    }
  }, {
    key: 'showGalleryTab',
    value: function showGalleryTab(gallery) {
      return _react2.default.createElement(
        'div',
        { className: 'details' },
        _react2.default.createElement(
          'div',
          { className: 'gallery-fields' },
          Object.keys(gallery).map(function (g) {
            return _react2.default.createElement('input', { value: gallery[g].path });
          }),
          _react2.default.createElement(
            'button',
            { className: 'add-gallery-field' },
            '+'
          )
        )
      );
    }
  }, {
    key: 'addGalleryImage',
    value: function addGalleryImage() {
      this.setState({ newProject: newProject });
    }
  }, {
    key: 'updateTab',
    value: function updateTab(key) {
      this.setState({ currentTab: key });
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var tabs = this.state.tabs;

      return _react2.default.createElement(
        'ul',
        null,
        tabs.map(function (t, key) {
          var boundClick = this.updateTab.bind(this, key),
              classes = this.state.currentTab === key ? "tab active" : "tab";
          return _react2.default.createElement(
            'li',
            { className: classes, key: key, ref: key, onClick: boundClick },
            t.title
          );
        }, this)
      );
    }
  }, {
    key: 'renderTab',
    value: function renderTab() {
      console.log(this.state.currentTab);
      switch (this.state.currentTab) {
        case 0:
          return this.showHeaderTab();
          break;
        case 1:
          return this.showGalleryTab(this.props.newProject.gallery);
          break;
        case 2:
          return this.showDetailsTab();
          break;
        default:
          return this.showHeaderTab();
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var gallery = this.props.newProject.gallery;
      return _react2.default.createElement(
        'section',
        { className: 'project-builder' },
        _react2.default.createElement(
          'div',
          { className: 'sidebar' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.createProject.bind(this) },
            _react2.default.createElement(
              'h3',
              null,
              'Create'
            ),
            _react2.default.createElement(
              'div',
              { className: 'tabs' },
              this.renderTabs(),
              _react2.default.createElement(
                'section',
                null,
                this.renderTab()
              ),
              _react2.default.createElement(
                'button',
                null,
                'Create Project'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'preview-window' },
          _react2.default.createElement(_ProjectPage2.default, { currentProject: this.props.newProject,
            linkState: this.props.linkState,
            edit: null
          })
        )
      );
    }
  }]);

  return NewProjectForm;
}(_react2.default.Component);

exports.default = NewProjectForm;