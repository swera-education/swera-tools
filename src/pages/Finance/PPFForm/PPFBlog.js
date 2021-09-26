import React, { Component } from 'react';

export default class PPFBlog extends Component {
  render() {
    return (
      <div className="card">
      <div className="header">
        <h4>PPF - Public Provident Fund</h4>
      </div>
      <div className="content">
        <h5 className="text-info">What is PPF?</h5>
        <p>Public Provident Fund (PPF) is a savings scheme offered by the Government of India 
          that provides income tax deduction u/s 80C for the amount invested (
          subject to a limit of Rs 1.5 lakh only)
        </p>
      </div>
    </div>
    );
  }
}
