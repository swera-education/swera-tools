import React, { Component } from 'react';

export default class CompInterestBlog extends Component {
  render() {
    return (
      <div className="card">
      <div className="header">
        <h4>Compound Interest</h4>
      </div>
      <div className="content">
        <h5 className="text-info">How to calculate Compound Interest?</h5>
        <p>Compound Interest is calculated using the compound interest formula. To calculate
          your future value, multiply your initial balance by one plus the annual interest
          rate raised to the power of the number of compound periods. Subtract the initial
          balance if you want just the compounded interest figure.</p>
        <div className="formula">
          <span style={{display:'block', 'font-size':'150%', 'font-weight':'bold', 'margin-bottom':'30px', 'color': '#1DC7EA'}}>
            A = P(1+r/n)<sup>(nt)</sup>
          </span>
              
          <span style={{'font-size':'13px', 'line-height':"15px"}}>
            <p>
              Where:
            </p> 
              <ul>
                <li>A = the future value of the investment or loan</li>
                <li>P = the principal investment or loan amount</li>
                <li>r = the interest rate (decimal)</li>
                <li>n = the number of times that interest is compounded per period</li>
                <li>t = the time (months, years, etc) the money is invested or borrowed for</li>
              </ul>
          </span>
        </div>
        <h5 className="text-info">Compound Interest Example</h5>
        <p>Let's look at a simple example and say you have ₹10,000 in your savings account,
          earning 5% rate per year</p>
        <p>
          Let's look at how we can calculate the year 10 figure using our formula. 
          Remember that our initial savings balance is ₹10,000, earning 5% interest per year. 
          Our compounding in this case is yearly (interest compounded once per year).
	      </p>
        <p>
          Our formula: <strong>A = P(1+r/n)<sup>(nt)</sup></strong>
        </p>
        <ul>
          <li>P = 10000.</li>
          <li>r = 5/100 = 0.05 (decimal).</li>
          <li>n = 1.</li>
          <li>t = 10.</li>
        </ul>
        <p>
          If we put those numbers into the formula, we get the following:
        </p>
        <div className="formula" style={{'padding-bottom':'20px'}}>
          A = 10000 (1 + 0.05 / 1)<sup> (1 × 10)</sup> = 16288.95
        </div>
        <p>
          So, the balance after 10 years is <strong>₹16,288.95</strong>. Our total interest earned is therefore <strong>₹6,288.95</strong>.
        </p>
      </div>
    </div>
    );
  }
}
