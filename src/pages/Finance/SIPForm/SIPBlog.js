import React, { Component } from 'react';

export default class SIPBlog extends Component {
  render() {
    return (
      <div className="card">
      <div className="header">
        <h4>SIP - Systematic Investment Plan</h4>
      </div>
      <div className="content">
        <h5 className="text-info">What is SIP?</h5>
        <p>Systematic Investment Plan, commonly referred to as an SIP, allows you to invest a small sum
          regularly in your preferred mutual fund scheme. By activating an SIP, a fixed amount is deducted
          from your bank account every month, which gets invested in the mutual fund of your choice.</p>
        <h5 className="text-info">What is SIP Calculator</h5>
        <p>A SIP calculator is a simple tool that allows individuals to get an idea of the returns 
            on their mutual fund investments made through SIP. SIP investments in mutual funds have 
            become one of the most popular investment options for millennials lately.</p>
        <p>This calculator will calculate the amount gained and expected returns for your monthly SIP 
          investment. Indeed, you get a rough estimate on the maturity amount for any of your monthly SIP, 
          based on a projected annual return rate.</p>
        <h5 className="text-info">How to calculate SIP</h5>
        <p>SIP future amount is calculated using the below interest formula:</p>
        <div className="formula">
          <p style={{display:'block', 'font-size':'150%', 'font-weight':'bold', 'margin-bottom':'30px', 'color': '#1DC7EA'}}>
            <span style={{"letter-spacing":"2px"}}>M × ([(1 + r/n)<sup>(nt)</sup> - 1] / (r/n)) <span>× (1+r/n)</span> </span>
          </p>
          <span style={{'font-size':'13px', 'line-height':"15px"}}>
            <p>
              Where:
            </p> 
              <ul>
                <li>A = the future value of the investment/loan, including interest</li>
                <li>M = the monthly payment</li>
                <li>r = the interest rate (decimal)</li>
                <li>n = the number of times that interest is compounded per period.
                  Here the period is by month, so 12 times the interest gets compounded per year</li>
                <li>t = the time (months, years, etc) the money is invested or borrowed for</li>
              </ul>
          </span>
        </div>
        <h5 className="text-info">SIP Example</h5>
        <p>Let's look at a simple example and say you want to invest ₹1,000 per month,
          12 months at a periodic rate of interest of 12%.</p>
        <p>
          Our formula: <strong>M × ([(1 + r/n)<sup>(nt)</sup>- 1] / (r/n))× (1+r/n)</strong>
        </p>
        <ul>
          <li>M = 1000.</li>
          <li>r = 12/100 = 0.12 (decimal).</li>
          <li>n = 12 (12 times the interest gets compounded per year).</li>
          <li>t = 1.</li>
        </ul>
        <p>
          If we put those numbers into the formula, we get the following:
        </p>
        <div className="formula" style={{'padding-bottom':'20px'}}>
          A = 1000 [(1 + 0.12 / 12)<sup> (12 × 1)</sup>-1]/(0.12/12)x(1 + 0.12/12)
          = 1000 [(1 + 0.01)<sup>12</sup>-1]/0.01x(1+0.01)
          = 12809.328
        </div>
        <p>
          So, the balance after 12 months (1 year) is <strong>₹12,809.328</strong>. Our total interest earned is therefore <strong>₹809.328</strong>.
        </p>
      </div>
    </div>
    );
  }
}
