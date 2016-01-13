"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Work = (function (_React$Component) {
  _inherits(Work, _React$Component);

  function Work() {
    _classCallCheck(this, Work);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Work).apply(this, arguments));
  }

  _createClass(Work, [{
    key: "getInitialState",
    value: function getInitialState() {
      return {
        projects: [{
          name: "Stratus",
          size: "small",
          coverImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/stratus_cover.jpg"
        }, {
          name: "Colorado.gov",
          size: "small",
          coverImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/colorado_gov_cover.jpg"
        }, {
          name: "Colorado Governor Hickenlooper",
          size: "small",
          coverImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/colorado_gov_cover.jpg"
        }, {
          name: "Olive Real Estate",
          size: "small",
          coverImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/colorado_gov_cover.jpg"
        }]
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.projects-grid').masonry({
        itemSelector: '.project',
        gutter: 0,
        columnWidth: 100
      });
    }
  }, {
    key: "render",
    value: function render() {
      var projects = this.state.projects;
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "My Work"
        ),
        React.createElement(
          "div",
          { className: "projects-grid" },
          projects.map(function (project) {
            var classes = "project " + project.size;
            return React.createElement(
              "div",
              { className: classes },
              React.createElement("img", { src: project.coverImage })
            );
          })
        )
      );
    }
  }]);

  return Work;
})(React.Component);

exports.default = Work;