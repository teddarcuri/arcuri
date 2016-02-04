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

var NewProjectForm = function (_React$Component) {
  _inherits(NewProjectForm, _React$Component);

  function NewProjectForm() {
    _classCallCheck(this, NewProjectForm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NewProjectForm).apply(this, arguments));
  }

  _createClass(NewProjectForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { action: '', className: 'full-screen' },
        _react2.default.createElement(
          'h3',
          null,
          'Create Project'
        ),
        _react2.default.createElement(
          'div',
          { className: 'half' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'name' },
            'Name'
          ),
          _react2.default.createElement('input', { name: 'name', type: 'text' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'half' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'types' },
            'Types'
          ),
          _react2.default.createElement('input', { type: 'types' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'half' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'background' },
            'Background'
          ),
          _react2.default.createElement('input', { type: 'background' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'half' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'logo' },
            'Logo'
          ),
          _react2.default.createElement('input', { type: 'logo' })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'description' },
          'Description'
        ),
        _react2.default.createElement('textarea', { name: 'description' }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'my-role' },
          'My Role'
        ),
        _react2.default.createElement('textarea', { name: 'my-role' }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'tech-used' },
          'Tech Used'
        ),
        _react2.default.createElement('textarea', { name: 'tech-used' }),
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          'Create Project'
        )
      );
    }
  }]);

  return NewProjectForm;
}(_react2.default.Component);

exports.default = NewProjectForm;