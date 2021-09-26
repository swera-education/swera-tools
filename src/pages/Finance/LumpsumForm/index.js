import React, { Component } from 'react';
import LumpsumForm from './LumpsumForm';
import ResultChart from '../ResultChart';
import ResultTable from '../ResultTable';
import { Tabs, Tab } from 'react-bootstrap';
import LumpsumBlog from './LumpsumBlog';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ResultChartFun(props) {
  const isResultAvailable = props.isResultAvailable;
  let amount = numberWithCommas(props.amount);
  let totalInterest = numberWithCommas(props.totalInterest);
  let totalDeposit = numberWithCommas(props.totalDeposit);
  if (isResultAvailable) {
    return (<div className="card">
      <div className="content">
        <div className="row">
          <div className="col-md-4">
            <p>Future Investment Value:</p>
            <h2 className="values-header">{props.currency}{amount}</h2>
          </div>
          <div className="col-md-4">
            <p>Total Interest:</p>
            <h2 className="values-header">{props.currency}{totalInterest}</h2>
          </div>
          <div className="col-md-4">
            <p>Total Deposit:</p>
            <h2 className="values-header">{props.currency}{totalDeposit}</h2>
          </div>
        </div>
        <Tabs defaultActiveKey={1} id="plan-text-tabs">
          <Tab eventKey={1} title="Table"><ResultTable data={props.tableData}/></Tab>
          <Tab eventKey={2} title="Graph"><ResultChart {...props}/></Tab>
        </Tabs>
      </div>
    </div>);
  }
  return false;
}

export default class Finance extends Component {
  state = {
    amount: 0,
    currency: '₹',
    initialBalance: 0,
    interestRate: 0,
    totalInterest: 0,
    totalDeposit: 0,
    tenure: 1,
    regularDeposit: 0,
    chartData: {
      labels: [],
      series: []
    },
    tableData: [],
    isResultAvailable: false,
  };

  dataFun = ({initialBalance, tenure, interestRate, regularDeposit,
    regularInterval, annualIncrement, isBeginning, currencySym}) => {
    const chartDataStock = this.state.chartData;
    const tableDataStock =  this.state.tableData;
    let amount = this.state.amount;
    let lastFutureValue = initialBalance;
    let regChangingDeposit = regularDeposit;
    let totalInterest = this.state.totalInterest;
    let totalDeposit = this.state.totalDeposit;
    let totalDep = initialBalance;
    for (let i = 0; i <= tenure; i++) {
        let interest = 0;
        let tableYearData = {};
        if (i > 0) {
          const int1 = lastFutureValue * interestRate;
          let int2 = 0;
          if (isBeginning == true)
            int2 = (regChangingDeposit / (12 / regularInterval)) * interestRate * (6 * ((regularInterval  + 1) / regularInterval));
          else
            int2 = (regChangingDeposit / (12 / regularInterval)) * interestRate * (6 * ((regularInterval  - 1) / regularInterval));
          lastFutureValue = lastFutureValue + (regChangingDeposit * regularInterval) +  int1 + int2;
          totalDep = parseInt(totalDep, 10) + regChangingDeposit * regularInterval;
          tableYearData.deposits = (regChangingDeposit * regularInterval).toFixed(2);
          regChangingDeposit = regChangingDeposit * (1 + annualIncrement);
          interest = int1 + int2;
          interest = interest;
        }
        totalDep = parseFloat(totalDep).toFixed(2);
        totalInterest = parseInt(totalInterest, 10) + interest;
        totalInterest = parseFloat(totalInterest).toFixed(2);
        chartDataStock.labels.push(`${i}`);
        chartDataStock.series.push(lastFutureValue.toFixed(2));
        tableYearData.year = `${i}`;
        tableYearData.currency = currencySym;
        if (i == 0)
          tableYearData.deposits = initialBalance.toFixed(2);
        tableYearData.interest = interest.toFixed(2);
        tableYearData.totalDeposits = totalDep;
        tableYearData.totalInterest = totalInterest;
        tableYearData.balance = lastFutureValue.toFixed(2);
        tableDataStock.push(tableYearData);
     }
    amount = lastFutureValue.toFixed(2);
    totalDeposit = totalDep;
    var result = {
      amount,
      totalInterest,
      totalDeposit,
      chartDataStock,
      tableDataStock
    }
    return result;
  };

  submitForm = values => {
    this.state.isResultAvailable = false;
    this.state.chartData = {
      labels: [],
      series: []
    }
    this.state.tableData = [];
    this.state.amount = 0;
    this.state.totalInterest = 0;
    this.state.totalDeposit = 0;
    const initialBalance = parseInt(values.initialBalance, 10);
    const interestRate = parseInt(values.interestRate, 10)/100;
    const tenure = parseInt(values.tenureYears, 10);
    const annualIncrement = parseInt(values.annualIncrement, 10) / 100;
    const regularDeposit = parseInt(values.regularDeposit, 10);
    const regularInterval = parseInt(values.regularInterval, 10);
    const isBeginning = values.isBeginning === 'true';
    const currencySym = values.currency;
    const dataFunResult  = this.dataFun({initialBalance, tenure,
      interestRate, regularDeposit, regularInterval, annualIncrement, isBeginning, currencySym});
    this.setState({
      currency: values.currency,
      initialBalance: initialBalance,
      interestRate: interestRate,
      tenure: tenure,
      isResultAvailable: true,
      amount: dataFunResult.amount,
      totalDeposit: dataFunResult.totalDeposit,
      totalInterest: dataFunResult.totalInterest,
      chartData: dataFunResult.chartDataStock,
      tableData: dataFunResult.tableDataStock
    })
    setTimeout(() => {
      document.getElementById('lumpsumResult').scrollIntoView({behavior: 'smooth', block: "end"})
    }, 100);
    return null;
  }

  render() {
    return (
      <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <LumpsumForm onSubmit={this.submitForm} />
          </div>
        </div>
        <div className = "row" id="lumpsumResult">
          <div className="col-md-8" >
            <ResultChartFun {...this.state}/>
          </div>
        </div>
        <div className = "row">
          <div className="col-md-8" >
            <LumpsumBlog {...this.state}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
