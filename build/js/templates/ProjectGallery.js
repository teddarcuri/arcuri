'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectGallery = function (_React$Component) {
  _inherits(ProjectGallery, _React$Component);

  function ProjectGallery(props) {
    _classCallCheck(this, ProjectGallery);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectGallery).call(this, props));

    _this.state = {
      currentImg: _this.props.project.gallery[Object.keys(_this.props.project.gallery)[0]]
    };
    return _this;
  }

  _createClass(ProjectGallery, [{
    key: 'setCurrentImg',
    value: function setCurrentImg(key) {
      console.log(key);

      this.setState({ currentImg: this.props.project.gallery[Object.keys(this.props.project.gallery)[key]] });
    }
  }, {
    key: 'incrementImg',
    value: function incrementImg() {
      this.setState({ currentImg: this.props.project.gallery[Object.keys(this.props.project.gallery)[key]] });
    }
  }, {
    key: 'render',
    value: function render() {
      var p = this.props.project,
          currentImg = this.state.currentImg;

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { component: "div",
          className: 'gallery',
          transitionName: 'fadeIn',
          transitionAppear: true,
          transitionAppearTimeout: 0,
          transitionEnterTimeout: 1000,
          transitionLeaveTimeout: 1000 },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { component: "div",
            className: 'current-img',
            transitionName: 'fadeIn',
            transitionAppear: true,
            transitionAppearTimeout: 0,
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000 },
          _react2.default.createElement('img', { src: currentImg.path, alt: '', key: 'currentImg' }),
          _react2.default.createElement(
            'ul',
            { className: 'dots' },
            Object.keys(p.gallery).map(function (img, key) {
              return _react2.default.createElement(
                'li',
                { key: key, onClick: this.setCurrentImg.bind(this, key) },
                '•'
              );
            }, this)
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'gallery-image-thumbs' },
          _react2.default.createElement(
            'h3',
            null,
            'Gallery'
          ),
          Object.keys(p.gallery).map(function (img, key) {
            return _react2.default.createElement(
              'li',
              { className: 'gallery-image', key: key, onClick: this.setCurrentImg.bind(this, key) },
              _react2.default.createElement('img', { src: p.gallery[img].path, alt: '' })
            );
          }, this)
        )
      );
    }
  }]);

  return ProjectGallery;
}(_react2.default.Component);

exports.default = ProjectGallery;