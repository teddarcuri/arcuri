'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactElementQuery = require('react-element-query');

var _reactElementQuery2 = _interopRequireDefault(_reactElementQuery);

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
      currentImage: 0
    };
    return _this;
  }

  _createClass(ProjectGallery, [{
    key: 'nextImg',
    value: function nextImg() {
      var key = this.state.currentImage + 1;
      this.setCurrentImage(key);
    }
  }, {
    key: 'prevImg',
    value: function prevImg() {
      var key = this.state.currentImage - 1;
      this.setCurrentImage(key);
    }
  }, {
    key: 'setCurrentImage',
    value: function setCurrentImage(key) {

      var images = Object.keys(this.props.project.gallery),
          length = images.length - 1; // Off by one

      if (key > length) {
        // set first
        key = 0;
      } else if (key < 0) {
        // set last
        key = length;
      }

      this.setState({ currentImage: key });
    }
  }, {
    key: 'renderCurrentImage',
    value: function renderCurrentImage() {
      return _react2.default.createElement('img', { src: this.props.project.gallery[Object.keys(this.props.project.gallery)[this.state.currentImage]].path, alt: '', key: 'currentImage' });
    }
  }, {
    key: 'renderArrows',
    value: function renderArrows() {
      var imageCount = Object.keys(this.props.project.gallery).length;
      if (imageCount > 1) {
        return _react2.default.createElement(
          'ul',
          { style: this.getStyles().arrows },
          _react2.default.createElement(
            'div',
            { onClick: this.nextImg.bind(this), style: this.getStyles().arrows.next },
            'NEXT'
          ),
          _react2.default.createElement(
            'div',
            { onClick: this.prevImg.bind(this), style: this.getStyles().arrows.prev },
            'PREV'
          )
        );
      }
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      return {
        arrows: {
          color: "#fff",
          position: "absolute",
          right: 10,
          top: 0,
          next: {
            fontSize: "0.66em",
            background: "rgba(0,0,0,0.6)",
            padding: 10
          },
          prev: {
            fontSize: "0.66em",
            background: "rgba(0,0,0,0.6)",
            padding: 10
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var p = this.props.project,
          currentImage = this.props.project.gallery[Object.keys(this.props.project.gallery)[this.state.currentImage]];

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
          this.renderCurrentImage(),
          this.renderArrows(),
          _react2.default.createElement(
            'ul',
            { className: 'dots' },
            Object.keys(p.gallery).map(function (img, key) {
              return _react2.default.createElement(
                'li',
                { key: key, onClick: this.setCurrentImage.bind(this, key) },
                '•'
              );
            }, this)
          )
        ),
        _react2.default.createElement(
          _reactElementQuery2.default,
          { sizes: [{ name: 'large', width: 300 }, { name: 'small', width: 150 }] },
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
                { className: 'gallery-image', key: key, onClick: this.setCurrentImage.bind(this, key) },
                _react2.default.createElement('img', { src: p.gallery[img].path, alt: '' })
              );
            }, this)
          )
        )
      );
    }
  }]);

  return ProjectGallery;
}(_react2.default.Component);

exports.default = ProjectGallery;