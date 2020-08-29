import React from "react";

const USAState = ({fill, dimensions, state, onClickState, stateName, x, y, ...customAttrs}) => {
  return (
    <>
      <path d={dimensions} fill={fill} id={`${state}-path`} data-name={state} className={`${state} state`} onClick={onClickState} {...customAttrs}>
        <title>{stateName}</title>
      </path>
      <text style={{ position: "absolute", left: x, top: y}}>{stateName}</text>
    </>
  );
}
export default USAState;
