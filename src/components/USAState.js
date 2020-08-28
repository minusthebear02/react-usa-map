import React from "react";

const USAState = ({fill, dimensions, state, onClickState, stateName, ...customAttrs}) => {
  return (
    <>
      <path d={dimensions} fill={fill} data-name={state} data-state="yerp" className={`${state} state`} onClick={onClickState} {...customAttrs}>
        <title>{stateName}</title>
      </path>
      <text>{stateName}</text>
    </>
  );
}
export default USAState;
