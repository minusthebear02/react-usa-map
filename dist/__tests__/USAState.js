"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "enzyme-adapter-react-15", "../components/USAState.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("enzyme-adapter-react-15"), require("../components/USAState.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.enzymeAdapterReact15, global.USAState);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _enzymeAdapterReact, _USAState) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

  var _USAState2 = _interopRequireDefault(_USAState);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact2["default"]()
  });
  describe("Component: USAState", function () {
    var element;
    var componentProps;
    var onClickStateMock;
    beforeEach(function () {
      onClickStateMock = jest.fn();
      componentProps = {
        dimensions: "M161.1,453.7 l-0.3,85.4 1.6,1 3.1,0.2 1.5,-1.1 h2.6 l0.2,2.9 7,6.8 0.5,2.6 3.4,-1.9 0.6,-0.2 0.3,-3.1 1.5,-1.6 1.1,-0.2 1.9,-1.5 3.1,2.1 0.6,2.9 1.9,1.1 1.1,2.4 3.9,1.8 3.4,6 2.7,3.9 2.3,2.7 1.5,3.7 5,1.8 5.2,2.1 1,4.4 0.5,3.1 -1,3.4 -1.8,2.3 -1.6,-0.8 -1.5,-3.1 -2.7,-1.5 -1.8,-1.1 -0.8,0.8 1.5,2.7 0.2,3.7 -1.1,0.5 -1.9,-1.9 -2.1,-1.3 0.5,1.6 1.3,1.8 -0.8,0.8 c0,0 -0.8,-0.3 -1.3,-1 -0.5,-0.6 -2.1,-3.4 -2.1,-3.4 l-1,-2.3 c0,0 -0.3,1.3 -1,1 -0.6,-0.3 -1.3,-1.5 -1.3,-1.5 l1.8,-1.9 -1.5,-1.5 v-5 h-0.8 l-0.8,3.4 -1.1,0.5 -1,-3.7 -0.6,-3.7 -0.8,-0.5 0.3,5.7 v1.1 l-1.5,-1.3 -3.6,-6 -2.1,-0.5 -0.6,-3.7 -1.6,-2.9 -1.6,-1.1 v-2.3 l2.1,-1.3 -0.5,-0.3 -2.6,0.6 -3.4,-2.4 -2.6,-2.9 -4.8,-2.6 -4,-2.6 1.3,-3.2 v-1.6 l-1.8,1.6 -2.9,1.1 -3.7,-1.1 -5.7,-2.4 h-5.5 l-0.6,0.5 -6.5,-3.9 -2.1,-0.3 -2.7,-5.8 -3.6,0.3 -3.6,1.5 0.5,4.5 1.1,-2.9 1,0.3 -1.5,4.4 3.2,-2.7 0.6,1.6 -3.9,4.4 -1.3,-0.3 -0.5,-1.9 -1.3,-0.8 -1.3,1.1 -2.7,-1.8 -3.1,2.1 -1.8,2.1 -3.4,2.1 -4.7,-0.2 -0.5,-2.1 3.7,-0.6 v-1.3 l-2.3,-0.6 1,-2.4 2.3,-3.9 v-1.8 l0.2,-0.8 4.4,-2.3 1,1.3 h2.7 l-1.3,-2.6 -3.7,-0.3 -5,2.7 -2.4,3.4 -1.8,2.6 -1.1,2.3 -4.2,1.5 -3.1,2.6 -0.3,1.6 2.3,1 0.8,2.1 -2.7,3.2 -6.5,4.2 -7.8,4.2 -2.1,1.1 -5.3,1.1 -5.3,2.3 1.8,1.3 -1.5,1.5 -0.5,1.1 -2.7,-1 -3.2,0.2 -0.8,2.3 h-1 l0.3,-2.4 -3.6,1.3 -2.9,1 -3.4,-1.3 -2.9,1.9 h-3.2 l-2.1,1.3 -1.6,0.8 -2.1,-0.3 -2.6,-1.1 -2.3,0.6 -1,1 -1.6,-1.1 v-1.9 l3.1,-1.3 6.3,0.6 4.4,-1.6 2.1,-2.1 2.9,-0.6 1.8,-0.8 2.7,0.2 1.6,1.3 1,-0.3 2.3,-2.7 3.1,-1 3.4,-0.6 1.3,-0.3 0.6,0.5 h0.8 l1.3,-3.7 4,-1.5 1.9,-3.7 2.3,-4.5 1.6,-1.5 0.3,-2.6 -1.6,1.3 -3.4,0.6 -0.6,-2.4 -1.3,-0.3 -1,1 -0.2,2.9 -1.5,-0.2 -1.5,-5.8 -1.3,1.3 -1.1,-0.5 -0.3,-1.9 -4,0.2 -2.1,1.1 -2.6,-0.3 1.5,-1.5 0.5,-2.6 -0.6,-1.9 1.5,-1 1.3,-0.2 -0.6,-1.8 v-4.4 l-1,-1 -0.8,1.5 h-6.1 l-1.5,-1.3 -0.6,-3.9 -2.1,-3.6 v-1 l2.1,-0.8 0.2,-2.1 1.1,-1.1 -0.8,-0.5 -1.3,0.5 -1.1,-2.7 1,-5 4.5,-3.2 2.6,-1.6 1.9,-3.7 2.7,-1.3 2.6,1.1 0.3,2.4 2.4,-0.3 3.2,-2.4 1.6,0.6 1,0.6 h1.6 l2.3,-1.3 0.8,-4.4 c0,0 0.3,-2.9 1,-3.4 0.6,-0.5 1,-1 1,-1 l-1.1,-1.9 -2.6,0.8 -3.2,0.8 -1.9,-0.5 -3.6,-1.8 -5,-0.2 -3.6,-3.7 0.5,-3.9 0.6,-2.4 -2.1,-1.8 -1.9,-3.7 0.5,-0.8 6.8,-0.5 h2.1 l1,1 h0.6 l-0.2,-1.6 3.9,-0.6 2.6,0.3 1.5,1.1 -1.5,2.1 -0.5,1.5 2.7,1.6 5,1.8 1.8,-1 -2.3,-4.4 -1,-3.2 1,-0.8 -3.4,-1.9 -0.5,-1.1 0.5,-1.6 -0.8,-3.9 -2.9,-4.7 -2.4,-4.2 2.9,-1.9 h3.2 l1.8,0.6 4.2,-0.2 3.7,-3.6 1.1,-3.1 3.7,-2.4 1.6,1 2.7,-0.6 3.7,-2.1 1.1,-0.2 1,0.8 4.5,-0.2 2.7,-3.1 h1.1 l3.6,2.4 1.9,2.1 -0.5,1.1 0.6,1.1 1.6,-1.6 3.9,0.3 0.3,3.7 1.9,1.5 7.1,0.6 6.3,4.2 1.5,-1 5.2,2.6 2.1,-0.6 1.9,-0.8 4.8,1.9z m-115.1,28.9 2.1,5.3 -0.2,1 -2.9,-0.3 -1.8,-4 -1.8,-1.5 h-2.4 l-0.2,-2.6 1.8,-2.4 1.1,2.4 1.5,1.5z m-2.6,33.5 3.7,0.8 3.7,1 0.8,1 -1.6,3.7 -3.1,-0.2 -3.4,-3.6z m-20.7,-14.1 1.1,2.6 1.1,1.6 -1.1,0.8 -2.1,-3.1 v-1.9z m-13.7,73.1 3.4,-2.3 3.4,-1 2.6,0.3 0.5,1.6 1.9,0.5 1.9,-1.9 -0.3,-1.6 2.7,-0.6 2.9,2.6 -1.1,1.8 -4.4,1.1 -2.7,-0.5 -3.7,-1.1 -4.4,1.5 -1.6,0.3z m48.9,-4.5 1.6,1.9 2.1,-1.6 -1.5,-1.3z m2.9,3 1.1,-2.3 2.1,0.3 -0.8,1.9 h-2.4z m23.6,-1.9 1.5,1.8 1,-1.1 -0.8,-1.9z m8.8,-12.5 1.1,5.8 2.9,0.8 5,-2.9 4.4,-2.6 -1.6,-2.4 0.5,-2.4 -2.1,1.3 -2.9,-0.8 1.6,-1.1 1.9,0.8 3.9,-1.8 0.5,-1.5 -2.4,-0.8 0.8,-1.9 -2.7,1.9 -4.7,3.6 -4.8,2.9z m42.3,-19.8 2.4,-1.5 -1,-1.8 -1.8,1z",
        state: "AK",
        fill: "DC1",
        onClickState: onClickStateMock
      };
      element = (0, _enzyme.shallow)( /*#__PURE__*/_react2["default"].createElement(_USAState2["default"], componentProps));
    });
    afterEach(function () {
      onClickStateMock.mockReset();
    });
    it("should render component with proper info", function () {
      expect(element.find("[d=\"".concat(componentProps.dimensions, "\"]")).length).toEqual(1);
      expect(element.find("[fill=\"".concat(componentProps.fill, "\"]")).length).toEqual(1);
      expect(element.find("[data-name=\"".concat(componentProps.state, "\"]")).length).toEqual(1);
      expect(element.find(".".concat(componentProps.state, ".state")).length).toEqual(1);
    });
    it("should calls `onClickState` when the component is clicked", function () {
      expect(onClickStateMock.mock.calls.length).toEqual(0);
      element.simulate("click");
      expect(onClickStateMock.mock.calls.length).toEqual(1);
    });
  });
});