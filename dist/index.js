"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./data/usa-map-dimensions", "./components/USAState"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./data/usa-map-dimensions"), require("./components/USAState"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.usaMapDimensions, global.USAState);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _usaMapDimensions, _USAState) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _usaMapDimensions2 = _interopRequireDefault(_usaMapDimensions);

  var _USAState2 = _interopRequireDefault(_USAState);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var USAMap = function (_React$Component) {
    _inherits(USAMap, _React$Component);

    var _super = _createSuper(USAMap);

    function USAMap() {
      var _this;

      _classCallCheck(this, USAMap);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "clickHandler", function (stateAbbreviation) {
        _this.props.onClick(stateAbbreviation);
      });

      _defineProperty(_assertThisInitialized(_this), "fillStateColor", function (state) {
        if (_this.props.customize && _this.props.customize[state] && _this.props.customize[state].fill) {
          return _this.props.customize[state].fill;
        }

        return _this.props.defaultFill;
      });

      _defineProperty(_assertThisInitialized(_this), "stateClickHandler", function (state) {
        if (_this.props.customize && _this.props.customize[state] && _this.props.customize[state].clickHandler) {
          return _this.props.customize[state].clickHandler;
        }

        return _this.clickHandler;
      });

      _defineProperty(_assertThisInitialized(_this), "customAttrs", function (state) {
        if (_this.props.customize && _this.props.customize[state] && _this.props.customize[state].customAttrs) {
          return _toConsumableArray(_this.props.customize[state].customAttrs);
        }

        return [];
      });

      _defineProperty(_assertThisInitialized(_this), "buildPaths", function () {
        var paths = [];
        var dataStates = (0, _usaMapDimensions2["default"])();

        for (var stateKey in dataStates) {
          var path = /*#__PURE__*/_react2["default"].createElement(_USAState2["default"], _extends({
            key: stateKey,
            stateName: dataStates[stateKey].name,
            dimensions: dataStates[stateKey]["dimensions"],
            state: stateKey,
            fill: _this.fillStateColor(stateKey),
            onClickState: _this.stateClickHandler(stateKey)
          }, _this.customAttrs(stateKey)));

          paths.push(path);
        }

        ;
        return paths;
      });

      return _this;
    }

    _createClass(USAMap, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react2["default"].createElement("svg", {
          className: "us-state-map",
          xmlns: "http://www.w3.org/2000/svg",
          width: this.props.width,
          height: this.props.height,
          viewBox: "0 0 959 593"
        }, /*#__PURE__*/_react2["default"].createElement("title", null, this.props.title), /*#__PURE__*/_react2["default"].createElement("g", {
          className: "outlines"
        }, this.buildPaths(), /*#__PURE__*/_react2["default"].createElement("g", {
          className: "DC state"
        }, /*#__PURE__*/_react2["default"].createElement("path", {
          className: "DC1",
          fill: this.fillStateColor("DC1"),
          d: "M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z"
        }), /*#__PURE__*/_react2["default"].createElement("circle", {
          className: "DC2",
          onClick: this.clickHandler,
          "data-name": "DC",
          fill: this.fillStateColor("DC2"),
          stroke: "#FFFFFF",
          strokeWidth: "1.5",
          cx: "801.3",
          cy: "251.8",
          r: "5",
          opacity: "1"
        }))));
      }
    }]);

    return USAMap;
  }(_react2["default"].Component);

  USAMap.propTypes = {
    onClick: _propTypes2["default"].func.isRequired,
    width: _propTypes2["default"].number,
    height: _propTypes2["default"].number,
    title: _propTypes2["default"].string,
    defaultFill: _propTypes2["default"].string,
    customize: _propTypes2["default"].object
  };
  USAMap.defaultProps = {
    onClick: function onClick() {},
    width: 959,
    height: 593,
    defaultFill: "#D3D3D3",
    title: "Blank US states map",
    customize: {}
  };
  exports["default"] = USAMap;
});