'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _project = require('./project');

var _project2 = _interopRequireDefault(_project);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _reactCatalyst = require('react-catalyst');

var _reactCatalyst2 = _interopRequireDefault(_reactCatalyst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewProjectForm = function (_React$Component) {
		_inherits(NewProjectForm, _React$Component);

		function NewProjectForm(props) {
				_classCallCheck(this, NewProjectForm);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(NewProjectForm).call(this, props));
		}

		_createClass(NewProjectForm, [{
				key: 'createProject',
				value: function createProject(ev) {

						ev.preventDefault();

						var project = {
								name: this.refs.name.value,
								background: this.refs.background.value,
								logo: this.refs.logo.value,
								types: this.refs.types.value,
								description: this.refs.description.value
						};

						// Add to project to state
						this.props.addProject(project);
				}
		}, {
				key: 'render',
				value: function render() {
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
														'Create Project'
												),
												_react2.default.createElement('input', { ref: 'name',
														name: 'name',
														type: 'text',
														placeholder: 'name',
														valueLink: this.props.linkState('newProject.name') }),
												_react2.default.createElement('input', { ref: 'types',
														type: 'types',
														placeholder: 'types' }),
												_react2.default.createElement('input', { ref: 'background',
														type: 'background',
														placeholder: 'background',
														valueLink: this.props.linkState('newProject.background') }),
												_react2.default.createElement('input', { ref: 'logo',
														type: 'logo',
														placeholder: 'logo',
														valueLink: this.props.linkState('newProject.logo') }),
												_react2.default.createElement('textarea', { ref: 'description',
														name: 'description',
														valueLink: this.props.linkState('newProject.description') }),
												_react2.default.createElement('textarea', { ref: 'myRole',
														name: 'my-role' }),
												_react2.default.createElement('textarea', { ref: 'techUsed',
														name: 'tech-used' }),
												_react2.default.createElement(
														'button',
														{ type: 'submit' },
														'Create Project'
												)
										)
								),
								_react2.default.createElement(
										'div',
										{ id: 'preview-window' },
										_react2.default.createElement(_project2.default, { currentProject: this.props.newProject })
								)
						);
				}
		}]);

		return NewProjectForm;
}(_react2.default.Component);

_reactMixin2.default.onClass(NewProjectForm, _reactCatalyst2.default.LinkedStateMixin);

exports.default = NewProjectForm;