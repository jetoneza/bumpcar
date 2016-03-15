'use strict';

import React from 'react';
import HighCharts from 'highcharts';
require('highcharts/modules/exporting')(HighCharts);

/**
 * Graph Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class BarGraph extends React.Component {

  componentDidMount() {
    var chart = HighCharts.chart(this.refs.chart, {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Violations Detected'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Violation count'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
      },

      series: [{
        name: 'Violation',
        colorByPoint: true,
        data: [{
          name: 'Over Speeding',
          y: 56,
          drilldown: 'Over Speeding'
        }, {
          name: 'Wrong Lane',
          y: 24,
          drilldown: 'Wrong Lane'
        }, {
          name: 'Beating the Red Light',
          y: 100,
          drilldown: 'Beating the Red Light'
        }]
      }]
    });
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="chart" ref="chart"></div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
BarGraph.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
BarGraph.defaultProps = {};

export default BarGraph;
