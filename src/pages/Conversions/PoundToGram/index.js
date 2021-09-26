import React, { Component } from 'react';
import PoundToGramForm from './PoundToGramForm';

function ResultChartFuns(props) {
  const isResultAvailable = props.isResultAvailable;
  if (isResultAvailable) {
    return (<div className="card">
      <div className="content">
        <div className="row">
          <div className="col-md-4">
            <p>Convert {props.inputPounds} pounds</p>
            <h2 className="values-header">{props.grams} in grams</h2>
            <h2 className="values-header">{props.ounces} in ounce</h2>
          </div>
        </div>
      </div>
    </div>);
  }
  return false;
}

export default class Finance extends Component {
  state = {
    grams: 0,
    ounces: 0,
    inputPounds: 0,
    roundOff: 2,
    isResultAvailable: false,
  };

  submitForm = values => {
    this.state.isResultAvailable = false;
    this.state.grams = 0;
    this.state.ounces = 0;
    const inputPounds = parseInt(values.inputPounds, 10);
    const roundOff = parseInt(values.roundOff, 10);
    this.state.isResultAvailable = true;
    this.state.grams = (inputPounds * 453.592).toFixed(roundOff);
    this.state.ounces = (inputPounds * 16).toFixed(roundOff);
    this.setState({
      isResultAvailable: true,
      pounds: (inputPounds * 453.592).toFixed(roundOff),
      ounces: (inputPounds * 16).toFixed(roundOff)
    })
    return null;
  }

  render() {
    return (
      <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <PoundToGramForm onSubmit={this.submitForm} />
          </div>
        </div>
        <div className = "row" id="gpfResult">
          <div className="col-md-8" >
            <ResultChartFuns {...this.state}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
