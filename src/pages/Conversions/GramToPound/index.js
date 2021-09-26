import React, { Component } from 'react';
import GramToPoundForm from './GramToPoundForm';

function ResultChartFuns(props) {
  const isResultAvailable = props.isResultAvailable;
  console.log('you are here');
  if (isResultAvailable) {
      console.log('you are here');
    return (<div className="card">
      <div className="content">
        <div className="row">
          <div className="col-md-4">
            <p>Convert {props.inputGrams} grams</p>
            <h2 className="values-header">{props.pounds} in pounds</h2>
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
    pounds: 0,
    ounces: 0,
    inputGrams: 0,
    roundOff: 2,
    isResultAvailable: false,
  };

  submitForm = values => {
    this.state.isResultAvailable = false;
    this.state.pounds = 0;
    this.state.ounces = 0;
    const inputGrams = parseInt(values.inputGrams, 10);
    const roundOff = parseInt(values.roundOff, 10);
    this.state.isResultAvailable = true;
    this.state.pounds = (inputGrams * 0.00220462).toFixed(roundOff);
    this.state.ounces = (inputGrams * 0.035274).toFixed(roundOff);
    this.setState({
      isResultAvailable: true,
      pounds: (inputGrams * 0.00220462).toFixed(roundOff),
      ounces: (inputGrams * 0.035274).toFixed(roundOff)
    })
    return null;
  }

  render() {
    return (
      <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <GramToPoundForm onSubmit={this.submitForm} />
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
