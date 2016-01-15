'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _about = require('./about');

var _about2 = _interopRequireDefault(_about);

var _projects = require('./projects');

var _projects2 = _interopRequireDefault(_projects);

var _project = require('./project');

var _project2 = _interopRequireDefault(_project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // React

// Routes

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'app-window' },
                _react2.default.createElement(
                    'header',
                    { id: 'main' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/' },
                        _react2.default.createElement(
                            'div',
                            { id: 'logo' },
                            _react2.default.createElement(
                                'svg',
                                { width: '614px', height: '619px', viewBox: '0 0 614 619', version: '1.1' },
                                _react2.default.createElement(
                                    'title',
                                    null,
                                    'Fill 1 + Fill 2'
                                ),
                                _react2.default.createElement(
                                    'desc',
                                    null,
                                    'Created with Sketch.'
                                ),
                                _react2.default.createElement('defs', null),
                                _react2.default.createElement(
                                    'g',
                                    { id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none', 'fill-rule': 'evenodd' },
                                    _react2.default.createElement(
                                        'g',
                                        { id: 'Page-1-Copy', fill: '#333333' },
                                        _react2.default.createElement(
                                            'g',
                                            { id: 'Fill-1-+-Fill-2' },
                                            _react2.default.createElement('path', { d: 'M0,191.454578 L613.484079,191.454578 L613.484079,0.4253125 L0,0.4253125 L0,191.454578 Z', id: 'Fill-1' }),
                                            _react2.default.createElement('path', { d: 'M211.249048,619 L402.225238,619 L402.225238,0.4253125 L211.249048,0.4253125 L211.249048,619 Z', id: 'Fill-2' })
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
                                        { fill: '#333333' },
                                        _react2.default.createElement('rect', { id: 'Rectangle-1', x: '30', y: '0', width: '90', height: '17' }),
                                        _react2.default.createElement('rect', { id: 'Rectangle-2', x: '30', y: '33', width: '90', height: '17' }),
                                        _react2.default.createElement('rect', { id: 'Rectangle-3', x: '30', y: '66', width: '90', height: '17' })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            null,
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
                        { version: '1.1', id: 'D-1', x: '0px', y: '0px',
                            viewBox: '-355.2 -98 94.4 102', 'enable-background': 'new -355.2 -98 94.4 102' },
                        _react2.default.createElement(
                            'g',
                            null,
                            _react2.default.createElement('path', { fill: 'none', d: 'M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z' }),
                            _react2.default.createElement('path', { fill: '#333333', d: 'M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5 c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z' })
                        )
                    ),
                    _react2.default.createElement(
                        'svg',
                        { version: '1.1', id: 'D-2', x: '0px', y: '0px',
                            viewBox: '-355.2 -98 94.4 102', 'enable-background': 'new -355.2 -98 94.4 102' },
                        _react2.default.createElement(
                            'g',
                            null,
                            _react2.default.createElement('path', { fill: 'none', d: 'M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z' }),
                            _react2.default.createElement('path', { fill: '#333333', d: 'M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5 c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'app-window', className: 'center' },
                    this.props.children
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    null,
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: App },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _index2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _about2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'work', component: _projects2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'work/:name', component: _project2.default })
    )
), document.getElementById('app'));