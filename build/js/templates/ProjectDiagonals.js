'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _ProjectBubble = require('./ProjectBubble');

var _ProjectBubble2 = _interopRequireDefault(_ProjectBubble);

var _ProjectDiagonal = require('./ProjectDiagonal');

var _ProjectDiagonal2 = _interopRequireDefault(_ProjectDiagonal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectDiagonals = function (_React$Component) {
	_inherits(ProjectDiagonals, _React$Component);

	function ProjectDiagonals(props) {
		_classCallCheck(this, ProjectDiagonals);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectDiagonals).call(this, props));
	}

	_createClass(ProjectDiagonals, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log(this.props.projects);
		}
	}, {
		key: 'render',
		value: function render() {
			var projects = this.props.projects;
			return _react2.default.createElement(
				_reactAddonsCssTransitionGroup2.default,
				{ className: 'diagonals',
					component: 'div',
					transitionAppear: true,
					transitionAppearTimeout: 0,
					transitionName: 'slideLeft',
					transitionEnterTimeout: 1000,
					transitionLeaveTimeout: 1000 },
				projects.map(function (p) {
					var path = "/work/" + p.name,
					    logoPath = p.logo,
					    bgImgPath = p.background,
					    styles = {
						backgroundImage: 'url(' + p.background + ')',
						backgroundSize: 'cover'
					};
					return _react2.default.createElement(_ProjectDiagonal2.default, { ref: p.id,
						key: p.id,
						path: path,
						name: p.name,
						logo: logoPath,
						background: bgImgPath,
						styles: styles });
				})
			);
		}
	}]);

	return ProjectDiagonals;
}(_react2.default.Component);

exports.default = ProjectDiagonals;