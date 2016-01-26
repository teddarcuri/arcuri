'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _projectList = require('../utilities/project-list');

var _projectList2 = _interopRequireDefault(_projectList);

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
      projects: _projectList2.default,
      project: _projectList2.default[0]
    };
    return _this;
  }

  _createClass(Project, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var id = this.props.params.name;
      this.setState({ project: this.findById(this.state.projects, id) });
    }
  }, {
    key: 'animateIn',
    value: function animateIn() {
      var _this2 = this;

      setTimeout(function () {
        document.getElementById("main").classList.add("light");
      }, 1500);
      setTimeout(function () {
        document.body.style.background = "#111111";
      }, 1000);
      setTimeout(function () {
        _this2.refs.backgroundImage.style.opacity = "0.3";
      }, 1100);
      setTimeout(function () {
        _this2.refs.projectSidebar.style.transform = "translateX(0%)";
      }, 1700);
      setTimeout(function () {
        _this2.refs.projectContent.style.transform = "translateY(0%)";
      }, 1700);
    }
  }, {
    key: 'animateOut',
    value: function animateOut() {
      var _this3 = this;

      document.getElementById("main").classList.remove("light");
      document.body.style.background = "whitesmoke";
      setTimeout(function () {
        _this3.refs.backgroundImage.style.opacity = "0";
      }, 50);
      setTimeout(function () {
        _this3.refs.projectSidebar.style.transform = "translateX(-200%)";
      }, 100);
    }
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
    key: 'render',
    value: function render() {
      var bgImgPath = this.state.project.background;
      return _react2.default.createElement(
        'div',
        { className: 'project-page' },
        _react2.default.createElement('img', { ref: 'backgroundImage', src: bgImgPath, className: 'bg' }),
        _react2.default.createElement(
          'div',
          { className: 'project-sidebar', ref: 'projectSidebar' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement('img', { ref: 'logo', src: this.state.project.logo, className: 'logo' }),
            _react2.default.createElement('img', { src: bgImgPath, className: 'bg' }),
            _react2.default.createElement(
              'h1',
              null,
              this.state.project.name
            )
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                null,
                'Gallery'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                null,
                'Overview'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                null,
                'Details'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { ref: 'projectContent', className: 'project-content' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'p',
              null,
              'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod.'
            )
          )
        )
      );
    }
  }]);

  return Project;
}(_react2.default.Component);

exports.default = Project;