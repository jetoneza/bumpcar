'use strict';

import React from 'react';
import HighCharts from 'highcharts';
require('highcharts/modules/exporting')(HighCharts);

/**
 * Graph Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class PieGraph extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  componentWillReceiveProps(newProps, oldProps) {
    this.props = newProps;
    this._updateChartData();
  }

  componentDidMount() {
    this._initChart();
  }

  componentDidMount() {
    var {count} = this.props.stats;

    this.chart = HighCharts.chart(this.refs.pieChart, {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Percentage of Detected Violations'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Violations',
        colorByPoint: true,
        data: [{
          name: 'Over Speeding',
          y: count.over_speeding,
          sliced: true,
          selected: true
        }, {
          name: 'Wrong Lane',
          y: count.wrong_lane,
        }, {
          name: 'Beating the Red Light',
          y: count.beating_red_light,
        }]
      }]
    });
  }

  _updateChartData() {
    var {count} = this.props.stats;

    var data = [
      {
        name: 'Over Speeding',
        y: count.over_speeding,
        sliced: true,
        selected: true
      }, {
        name: 'Wrong Lane',
        y: count.wrong_lane,
      }, {
        name: 'Beating the Red Light',
        y: count.beating_red_light,
      }
    ];

    this.chart.series[0].setData(data);
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="chart" ref="pieChart"></div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
PieGraph.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
PieGraph.defaultProps = {};

export default PieGraph;
