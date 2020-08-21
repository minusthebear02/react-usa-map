"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  var USAState = function USAState(_ref) {
    var fill = _ref.fill,
        dimensions = _ref.dimensions,
        state = _ref.state,
        onClickState = _ref.onClickState,
        stateName = _ref.stateName,
        customAttrs = _ref.customAttrs;
    return /*#__PURE__*/_react2["default"].createElement("path", _extends({
      d: dimensions,
      fill: fill,
      "data-name": state,
      className: "".concat(state, " state"),
      onClick: onClickState
    }, customAttrs), /*#__PURE__*/_react2["default"].createElement("title", null, stateName));
  };

  exports["default"] = USAState;
});