import React, { Component } from 'react';
import ReactChartist from 'react-chartist';

function abbrNum(number, decPlaces) {
  decPlaces = Math.pow(10,decPlaces);

  let abbrev = [ "k", "m", "b", "t" ];

  for (let i=abbrev.length-1; i>=0; i--) {

      let size = Math.pow(10,(i+1)*3);
      if(size <= number) {
           number = (number*decPlaces/size)/decPlaces;
           if((number == 1000) && (i < abbrev.length - 1)) {
               number = 1;
               i++;
           }
           number += abbrev[i];
           break;
      }
  }
  return number;
}

export default class ResultChart extends Component {
  render() {
    let dataStock = {
      series: []
    };
    dataStock.labels = this.props.chartData.labels;
    dataStock.series.push(this.props.chartData.series);
    let currency = this.props.currency;

    const optionsStock = {
      lineSmooth: false,
      height: "260px",
      axisY: {
        offset: 40,
        labelInterpolationFnc: function(value) {
            const valueInUnits = abbrNum(value, 0);
            return currency + valueInUnits;
          }
      },
      low: this.props.initialBalance,
      high: this.props.amount,
        classNames: {
          point: 'ct-point ct-green',
          line: 'ct-line ct-green'
      }
    };
    return (
      <div className="card">
      <div className="header">
        <h4>Calculation Breakdown</h4>
      </div>
      <div className="content">
        <ReactChartist data={dataStock} options={optionsStock} type="Line" className="ct-chart" />
      </div>
    </div>
      );
  }
}
