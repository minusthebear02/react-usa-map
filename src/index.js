import React from "react";
import PropTypes from "prop-types";
import data from "./data/usa-map-dimensions";
import USAState from "./components/USAState";

class USAMap extends React.Component {

  clickHandler = (stateAbbreviation) => {
    this.props.onClick(stateAbbreviation);
  };

  fillStateColor = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].fill) {
      return this.props.customize[state].fill;
    }

    return this.props.defaultFill;
  };

  stateClickHandler = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].clickHandler) {
      return this.props.customize[state].clickHandler
    }
    return this.clickHandler;
  }

  customAttrs = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].customAttrs) {
      return this.props.customize[state].customAttrs
    }
    return {}

  }

  buildPaths = () => {
    let paths = [];
    let dataStates = data();
    for (let stateKey in dataStates) {
      const path = <USAState key={stateKey} stateName={dataStates[stateKey].name} dimensions={dataStates[stateKey]["dimensions"]} state={stateKey} fill={this.fillStateColor(stateKey)} onClickState={this.stateClickHandler(stateKey)} {...this.customAttrs(stateKey)} x={this.props.customize[stateKey].x} y={this.props.customize[stateKey].y} />
      paths.push(path);
    };
    return paths;
  };

  buildText = () => {
    let names = [];
    let dataStates = data();
    for (let stateKey in dataStates) {
      const name = <foreignObject key={stateKey} width="25" height="30" x={this.props.customize[stateKey].x} y={this.props.customize[stateKey].y }><div className={`state-name state-${stateKey}`} data-party={this.props.customize[stateKey].customAttrs["data-party"]}>{stateKey}<br />{this.props.customize[stateKey].numVotes}</div></foreignObject>;
      names.push(name);
    };
    return names;
  };

  render() {
    return (
      <svg
        className="us-state-map"
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.props.height}
        viewBox="0 0 959 593"
      >
        <title>{this.props.title}</title>
        <g className="outlines">
          {this.buildPaths()}
          <g className="DC state">
            <path
              className="DC1"
              fill={this.fillStateColor("DC1")}
              d="M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z"
            />
            <circle
              className="DC2"
              onClick={this.clickHandler}
              data-name={"DC"}
              fill={this.fillStateColor("DC2")}
              stroke="#FFFFFF"
              strokeWidth="1.5"
              cx="801.3"
              cy="251.8"
              r="5"
              opacity="1"
              data-party={this.customAttrs("DC")["data-party"]}
              data-votes={this.customAttrs("DC")["data-votes"]}
            />
          </g>
        </g>
        {this.buildText()}
      </svg>
    );
  }
}

USAMap.propTypes = {
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  defaultFill: PropTypes.string,
  customize: PropTypes.object
};

USAMap.defaultProps = {
  onClick: () => {},
  width: 959,
  height: 593,
  defaultFill: "#D3D3D3",
  title: "Blank US states map",
  customize: {}
};

export default USAMap;
