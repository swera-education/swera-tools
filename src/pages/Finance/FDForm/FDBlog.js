import React, { Component } from 'react';

export default class FDBlog extends Component {
  render() {
    return (
      <div className="card">
      <div className="header">
        <h4>Fixed Deposit</h4>
      </div>
      <div className="content">
        <h5 className="text-info">What is Fixed Deposit?</h5>
        <p>Fixed Deposit is a low-risk financial instrument that helps investors to grow 
          savings at a fixed rate of interest, which is higher than the interest rates 
          offered by savings accounts.</p>
        <p>In a Fixed Deposit, the sum of money is blocked for the period of the deposit.
          Banks allow depositors the flexibility to invest their funds from periods as low
          as 7 days to 10 years. On the date of maturity, the bank credits the principal and
          interest to the bank account of the depositor.
          FD interest rates may vary from 2.5% to 5.8% from different banks.</p>
        <h5 className="text-info">How to calculate Fixed Deposit Maturity Amount</h5>
        <p>FD future amount is calculated using the below interest formula:</p>
        <div className="formula">
          <span style={{display:'block', 'font-size':'150%', 'font-weight':'bold', 'margin-bottom':'30px', 'color': '#1DC7EA'}}>
            A = P(1+r/n)<sup>(nt)</sup>
          </span>
          <span style={{'font-size':'13px', 'line-height':"15px"}}>
            <p>
              Where:
            </p> 
              <ul>
                <li>A = the future value of the investment, including interest</li>
                <li>P = the principal invested amount</li>
                <li>r = the interest rate (decimal)</li>
                <li>n = the number of times that interest is compounded per period.
                  For FD's only once a year the interest is compounded</li>
                <li>t = the time the money is invested for</li>
              </ul>
          </span>
        </div>
        <h5 className="text-info">FD Example</h5>
        <p>Let's look at a simple example and say you want to deposit ₹1,00,000 ,
          for 10% interest for 10 years</p>
        <p>
          Our formula: <strong>P(1+r/n)<sup>(nt)</sup></strong>
        </p>
        <ul>
          <li>P = 100000.</li>
          <li>r = 10/100 = 0.1 (decimal).</li>
          <li>n = 1</li>
          <li>t = 10.</li>
        </ul>
        <p>
          If we put those numbers into the formula, we get the following:
        </p>
        <div className="formula" style={{'padding-bottom':'20px'}}>
          A = 100000 (1 + 0.1 / 1)<sup> (1 × 10)</sup>
          = 259374.24601
        </div>
        <p>
          So, the balance after 10 years is <strong>₹2,59,374.24601</strong>. Our total interest earned is therefore <strong>₹159,374.246</strong>
        </p>
      </div>
    </div>
    );
  }
}
