"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "enzyme-adapter-react-15", "../index", "../data/usa-map-dimensions"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("enzyme-adapter-react-15"), require("../index"), require("../data/usa-map-dimensions"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.enzymeAdapterReact15, global.index, global.usaMapDimensions);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _enzymeAdapterReact, _index, _usaMapDimensions) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

  var _index2 = _interopRequireDefault(_index);

  var _usaMapDimensions2 = _interopRequireDefault(_usaMapDimensions);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact2["default"]()
  });
  describe("Component: USAMap", function () {
    var element;
    var componentProps;
    var onClickMock;
    var customisedClickHandleMock;
    beforeEach(function () {
      onClickMock = jest.fn();
      customisedClickHandleMock = jest.fn();
      componentProps = {
        width: 959,
        height: 593,
        defaultFill: "#D3D3D3",
        title: "Blank US states map",
        customize: {
          "AK": {
            fill: "dummy-fill"
          },
          "NJ": {
            fill: "navy",
            clickHandler: customisedClickHandleMock
          }
        },
        onClick: onClickMock
      };
      element = (0, _enzyme.shallow)( /*#__PURE__*/_react2["default"].createElement(_index2["default"], componentProps));
    });
    afterEach(function () {
      onClickMock.mockReset();
    });
    it("should render all states based on `usa-map-dimensions` file", function () {
      expect(onClickMock.mock.calls.length).toEqual(0);
      var statesLength = element.find("USAState").length;
      expect(Object.keys((0, _usaMapDimensions2["default"])()).length).toEqual(statesLength);
    });
    it("should add customised data by state", function () {
      var statesLength = element.find("USAState[fill=\"".concat(componentProps.customize.AK.fill, "\"]"));
      expect(statesLength.length).toEqual(1);
    });
    it("should calls `onClick` when the component is clicked", function () {
      expect(onClickMock.mock.calls.length).toEqual(0);
      var state = element.find(".state .DC2");
      state.simulate("click");
      expect(onClickMock.mock.calls[0]).toEqual([undefined]);
      expect(customisedClickHandleMock.mock.calls.length).toEqual(0);
    });
    it("should calls customise method is customise property has click handler", function () {
      // You have to mount instead of shallow because of dom-child of USAState.
      // We can simulate click only on that child, not in parent.
      element = (0, _enzyme.mount)( /*#__PURE__*/_react2["default"].createElement(_index2["default"], componentProps));
      var state = element.find("USAState[fill=\"".concat(componentProps.customize.NJ.fill, "\"]")).last();
      expect(state.length).toEqual(1);
      state.simulate("click");
      expect(onClickMock.mock.calls.length).toEqual(0);
      expect(customisedClickHandleMock.mock.calls.length).toEqual(1);
    });
  });
});