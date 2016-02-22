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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Experience = function (_React$Component) {
  _inherits(Experience, _React$Component);

  function Experience(props) {
    _classCallCheck(this, Experience);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Experience).call(this, props));
  }

  _createClass(Experience, [{
    key: 'render',
    value: function render() {
      var styles = {
        column: {
          width: "33%"
        }
      };
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionAppear: true,
          transitionAppearTimeout: 2000,
          transitionName: 'fadeIn',
          style: { maxWidth: "1000px" },
          transitionEnterTimeout: 2000,
          transitionLeaveTimeout: 2000 },
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Experience'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Colorado Interactive'
            ),
            _react2.default.createElement(
              'span',
              null,
              'August 2014 - present'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Rootspring Studios'
            ),
            _react2.default.createElement(
              'span',
              null,
              'April 2013 - November 2014'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Helium'
            ),
            _react2.default.createElement(
              'span',
              null,
              'June 2012 - April 2013'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.'
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Knowledge'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'div',
            { style: styles.column },
            _react2.default.createElement(
              'h3',
              null,
              'Languages'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Javascript'
              ),
              _react2.default.createElement(
                'li',
                null,
                'PHP'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Ruby'
              ),
              _react2.default.createElement(
                'li',
                null,
                'HTML'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Sass + LESS + Stylus'
              ),
              _react2.default.createElement(
                'li',
                null,
                'CSS'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { style: styles.column },
            _react2.default.createElement(
              'h3',
              null,
              'Frameworks/Libraries/Tools'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'React.js'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Ember.js'
              ),
              _react2.default.createElement(
                'li',
                null,
                'jQuery'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Node.js'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Express.js'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Drupal'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Wordpress'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Ruby on Rails'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Gulp'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Grunt'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Webpack'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Firebase'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { style: styles.column },
            _react2.default.createElement(
              'h3',
              null,
              'UI + Creative tools'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Illustrator'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Photoshop'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Sketch'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Balsalmiq'
              ),
              _react2.default.createElement(
                'li',
                null,
                'InDesign'
              )
            )
          )
        )
      );
    }
  }]);

  return Experience;
}(_react2.default.Component);

exports.default = Experience;