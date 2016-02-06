'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ProjectPage = require('./ProjectPage');

var _ProjectPage2 = _interopRequireDefault(_ProjectPage);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));
  }

  // // Send the new project off to the App

  _createClass(Tabs, [{
    key: 'createProject',
    value: function createProject(ev) {

      ev.preventDefault();

      // 	// var project = {
      // 	// 	name: this.refs.name.value,
      // 	// 	background: this.refs.background.value,
      // 	// 	logo: this.refs.logo.value,
      // 	// 	types: this.refs.types.value,
      // 	// 	description: this.refs.description.value,
      // 	// 	gallery: {
      //  //        image1: {
      //  //          path: "/src/img/gallery_images/colorado_gov/contact.png"
      //  //        }
      //  //      }
      // 	// }

      // 	// Add to project to state
      this.props.addProject();
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
          valueLink: this.props.mode === "CREATE" ? this.props.linkState('newProject.name') : this.props.linkState('currentProject.name') }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'logo' },
          'Logo'
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex' },
          _react2.default.createElement('img', { className: 'thumb', src: this.props.project.logo }),
          _react2.default.createElement('input', { ref: 'logo',
            type: 'logo',
            placeholder: 'logo',
            name: 'logo',
            valueLink: this.props.mode === "CREATE" ? this.props.linkState('newProject.logo') : this.props.linkState('currentProject.logo') })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'background' },
          'Background'
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex' },
          _react2.default.createElement('img', { className: 'thumb', src: this.props.project.background }),
          _react2.default.createElement('input', { ref: 'background',
            type: 'background',
            placeholder: 'background',
            name: 'background',
            valueLink: this.props.mode === "CREATE" ? this.props.linkState('newProject.background') : this.props.linkState('currentProject.background') })
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
          valueLink: this.props.mode === "CREATE" ? this.props.linkState('newProject.description') : this.props.linkState('currentProject.description') })
      );
    }
  }, {
    key: 'showGalleryTab',
    value: function showGalleryTab(gallery) {
      var images = Object.keys(gallery),
          fields;

      if (images.length) {
        images.map(function (g) {
          return _react2.default.createElement('input', { key: g, valueLink: this.props.mode === "CREATE" ? this.props.linkState('newProject.gallery[' + g + '].path') : this.props.linkState('currentProject.gallery[' + g + '].path') });
        }, this);
      }

      return _react2.default.createElement(
        'div',
        { className: 'details' },
        _react2.default.createElement(
          'div',
          { className: 'gallery-fields' },
          _react2.default.createElement(
            'button',
            { className: 'add-gallery-field', onClick: this.addGalleryImage.bind(this) },
            '+'
          )
        )
      );
    }
  }, {
    key: 'addGalleryImage',
    value: function addGalleryImage() {
      var timestamp = new Date().getTime();
      this.props.project.gallery['image' + timestamp] = { path: "/src/img/gallery_images/colorado_gov/front-page.png" };
    }
  }, {
    key: 'updateTab',
    value: function updateTab(key) {
      this.props.setActiveSection(key);
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var tabs = this.props.sections;

      return _react2.default.createElement(
        'ul',
        null,
        tabs.map(function (t, key) {
          var boundClick = this.updateTab.bind(this, key),
              classes = this.props.activeSection === key ? "tab active" : "tab";
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
      switch (this.props.activeSection) {
        case 0:
          return this.showHeaderTab();
          break;
        case 1:
          return this.showGalleryTab(this.props.project.gallery);
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

      var title = this.props.mode === "CREATE" ? "Create" : "Edit";
      return _react2.default.createElement(
        'form',
        { onSubmit: this.createProject.bind(this) },
        _react2.default.createElement(
          'h3',
          null,
          title
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
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

exports.default = Tabs;