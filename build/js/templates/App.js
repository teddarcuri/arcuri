'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _projectList = require('../utilities/project-list');

var _projectList2 = _interopRequireDefault(_projectList);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _about = require('./about');

var _about2 = _interopRequireDefault(_about);

var _projects = require('./projects');

var _projects2 = _interopRequireDefault(_projects);

var _ProjectDiagonals = require('./ProjectDiagonals');

var _ProjectDiagonals2 = _interopRequireDefault(_ProjectDiagonals);

var _ProjectBar = require('./ProjectBar');

var _ProjectBar2 = _interopRequireDefault(_ProjectBar);

var _ProjectIndex = require('./ProjectIndex');

var _ProjectIndex2 = _interopRequireDefault(_ProjectIndex);

var _NewProjectForm = require('./NewProjectForm');

var _NewProjectForm2 = _interopRequireDefault(_NewProjectForm);

var _project = require('./project');

var _project2 = _interopRequireDefault(_project);

var _contact = require('./contact');

var _contact2 = _interopRequireDefault(_contact);

var _reBase = require('re-base');

var _reBase2 = _interopRequireDefault(_reBase);

var _helpers = require('../utilities/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _imagesloaded = require('imagesloaded');

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _reactCatalyst = require('react-catalyst');

var _reactCatalyst2 = _interopRequireDefault(_reactCatalyst);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // React

// Routes

// Firebase

var base = _reBase2.default.createClass('https://tedd-arcuri.firebaseio.com/');

// Utility

/*
  Application
*/

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      // Projects
      isProjectPage: false,
      currentProject: {},
      newProject: {
        name: "New Project",
        description: "Enter description",
        background: "/src/img/backgrounds/colorado.jpg",
        logo: "",
        types: "Llama",
        gallery: {
          image1: {
            path: "/src/img/gallery_images/colorado_gov/contact.png"
          }
        }
      },
      projects: []

    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Check to see if the loaded route will be a project component
      this.checkIfProjectPage(this.props);

      // Go get projects from Firebase
      base.syncState('projects', {
        context: this,
        state: 'projects',
        asArray: true,
        then: function then() {
          //console.log(this.state.projects);
        }
      });

      // Images Loaded
      var imgLoad = (0, _imagesloaded2.default)(this.refs.appWindow, function (instance) {
        console.log(instance);
      });

      imgLoad.on('progress', function (imgLoad, image) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log('image is ' + result + ' for ' + image.img.src);
      });

      imgLoad.on('done', function (instance) {});
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Check to see if the next route will be a project component
      this.checkIfProjectPage(nextProps);
    }

    // Page Detection

  }, {
    key: 'checkIfProjectPage',
    value: function checkIfProjectPage(props) {
      var path = props.location.pathname;

      // If the pathname contains work/
      if (path.indexOf('work/') != -1) {

        // Set to Project Page
        this.setState({ isProjectPage: true });

        // Set Current Project
        var id = props.params.name;
        this.setState({ currentProject: this.findById(this.state.projects, id) });
      } else {
        this.setState({ isProjectPage: false });
      }
    }

    // CRUD

  }, {
    key: 'findById',
    value: function findById(source, id) {
      for (var i = 0; i < source.length; i++) {
        if (source[i].name == id) {
          return source[i];
        }
      }
    }
  }, {
    key: 'addProject',
    value: function addProject(project) {
      var timestamp = new Date().getTime();

      this.state.projects.push(project);
      this.setState({ projects: this.state.projects });
      this.history.pushState(null, '/work/' + project.name);
    }
  }, {
    key: 'removeProject',
    value: function removeProject(project) {
      var id = this.props.params.name;
      var source = this.state.projects;

      // Find the project and remove it based off url
      for (var i = 0; i < source.length; i++) {
        if (source[i].name == id) {
          this.state.projects.splice(i);
          return;
        }
      }

      // Update state -> Go to work index page
      this.setState({ projects: this.state.projects });
      this.history.pushState(null, '/work');
    }
  }, {
    key: 'renderProjectBubbles',
    value: function renderProjectBubbles() {
      return _react2.default.createElement(_ProjectIndex2.default, { projects: this.state.projects,
        currentProject: this.state.currentProject });
    }
  }, {
    key: 'render',
    value: function render() {
      var logoClasses = this.state.isProjectPage ? "light" : "dark",
          renderBubbles = this.renderProjectBubbles();

      return _react2.default.createElement(
        'div',
        { className: 'app-window',
          ref: 'appWindow' },
        _react2.default.createElement(
          'header',
          { id: 'main', className: logoClasses },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            _react2.default.createElement(
              'div',
              { id: 'logo' },
              _react2.default.createElement(
                'svg',
                { className: 'letter', width: '614px', height: '619px', viewBox: '0 0 614 619', version: '1.1' },
                _react2.default.createElement('defs', null),
                _react2.default.createElement(
                  'g',
                  { id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none', 'fill-rule': 'evenodd' },
                  _react2.default.createElement(
                    'g',
                    { id: 'Page-1-Copy' },
                    _react2.default.createElement(
                      'g',
                      { id: 'Fill-1-+-Fill-2' },
                      _react2.default.createElement('path', { className: 'svg-fill', d: 'M0,191.454578 L613.484079,191.454578 L613.484079,0.4253125 L0,0.4253125 L0,191.454578 Z', id: 'Fill-1' }),
                      _react2.default.createElement('path', { className: 'svg-fill', d: 'M211.249048,619 L402.225238,619 L402.225238,0.4253125 L211.249048,0.4253125 L211.249048,619 Z', id: 'Fill-2' })
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'menu' },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(
                'svg',
                { id: 'menu-icon', width: '60px', height: '60px', viewBox: '40 0 70 80', version: '1.1' },
                _react2.default.createElement('defs', null),
                _react2.default.createElement(
                  'g',
                  { stroke: 'none', strokeWidth: '1', fill: 'none', 'fill-rule': 'evenodd' },
                  _react2.default.createElement(
                    'g',
                    { className: 'svg-fill' },
                    _react2.default.createElement('rect', { className: 'svg-fill', id: 'Rectangle-1', x: '30', y: '0', width: '90', height: '17' }),
                    _react2.default.createElement('rect', { className: 'svg-fill', id: 'Rectangle-2', x: '30', y: '33', width: '90', height: '17' }),
                    _react2.default.createElement('rect', { className: 'svg-fill', id: 'Rectangle-3', x: '30', y: '66', width: '90', height: '17' })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'main' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/about' },
                  'About'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/work' },
                  'My Work'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                renderBubbles
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/contact' },
                  'Contact'
                )
              )
            )
          ),
          _react2.default.createElement(
            'svg',
            { className: 'letter', version: '1.1', id: 'D-1', x: '0px', y: '0px',
              viewBox: '-355.2 -98 94.4 102', 'enable-background': 'new -355.2 -98 94.4 102' },
            _react2.default.createElement(
              'g',
              { className: 'svg-fill' },
              _react2.default.createElement('path', { fill: 'none', d: 'M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z' }),
              _react2.default.createElement('path', { className: 'svg-fill', d: 'M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5 c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z' })
            )
          ),
          _react2.default.createElement(
            'svg',
            { className: 'letter', version: '1.1', id: 'D-2', x: '0px', y: '0px',
              viewBox: '-355.2 -98 94.4 102', 'enable-background': 'new -355.2 -98 94.4 102' },
            _react2.default.createElement(
              'g',
              { className: 'svg-fill' },
              _react2.default.createElement('path', { fill: 'none', d: 'M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z' }),
              _react2.default.createElement('path', { className: 'svg-fill', d: 'M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5 c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'app-window', className: 'center' },
          _react2.default.createElement(
            _reactAddonsTransitionGroup2.default,
            { component: 'div',
              className: 'f-center' },
            _react2.default.cloneElement(this.props.children, {
              key: this.props.location.pathname,
              isProjectPage: this.state.isProjectPage,
              projects: this.state.projects,
              currentProject: this.state.currentProject,
              newProject: this.state.newProject,
              addProject: this.addProject.bind(this),
              removeProject: this.removeProject.bind(this),
              linkState: this.linkState.bind(this)
            })
          )
        ),
        _react2.default.createElement('div', { id: 'background-smoke' }),
        _react2.default.createElement(_ProjectBar2.default, { projects: this.state.projects,
          currentProject: this.state.currentProject })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

// Mixins

_reactMixin2.default.onClass(App, _reactCatalyst2.default.LinkedStateMixin);
_reactMixin2.default.onClass(App, _reactRouter.History);

/*
  Render Routes
*/
_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: (0, _createBrowserHistory2.default)() },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: App },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _index2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _about2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'contact', component: _contact2.default }),
    _react2.default.createElement(
      _reactRouter.Route,
      { path: 'work', component: _projects2.default },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _ProjectDiagonals2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'new', component: _NewProjectForm2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: ':name', component: _project2.default })
    )
  )
), document.getElementById('app'));

exports.default = App;