import React, { Component } from 'react';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default class ValuesCard extends Component {
  render() {
    let amount = numberWithCommas(this.props.amount);
    let totalInterest = numberWithCommas(this.props.totalInterest);
    let totalDeposit = numberWithCommas(this.props.totalDeposit);
    return (
        <div className="card">
          <div className="content">
            <div className="row">
              <div className="col-md-4">
                <p>Future Investment Value:</p>
                <h2 className="values-header">{this.props.currency}{amount}</h2>
              </div>
              <div className="col-md-4">
                <p>Total Interest:</p>
                <h2 className="values-header">{this.props.currency}{totalInterest}</h2>
              </div>
              <div className="col-md-4">
                <p>Total Deposit:</p>
                <h2 className="values-header">{this.props.currency}{totalDeposit}</h2>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
