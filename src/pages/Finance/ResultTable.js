import React from 'react';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ShowInterestHyphen(props) {
  if (props.interest == '0.00') {
    return (<span>--</span>);
  } else {
    return (<span>{props.currency}{numberWithCommas(props.interest)}</span>);
  }
}

function ShowTotIntHyphen(props) {
  if (props.totalInterest == '0.00') {
    return (<span>--</span>);
  } else {
    return (<span>{props.currency}{numberWithCommas(props.totalInterest)}</span>);
  }
}

const ResultTable = ({data}) => (
  <div className="card">
    <div className="header">
      <h4 className="title">Calculation Breakdown</h4>
    </div>
    <div className="content table-responsive table-full-width">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Year</th>
            <th>Deposits</th>
            <th>Interest</th>
            <th>TotalDeposits</th>
            <th>TotalInterest</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.currency}{numberWithCommas(item.deposits)}</td>
              <td><ShowInterestHyphen {...item}/></td>
              <td>{item.currency}{numberWithCommas(item.totalDeposits)}</td>
              <td><ShowTotIntHyphen {...item}/></td>
              <td>{item.currency}{numberWithCommas(item.balance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ResultTable;