'use strict';

import React from 'react';
import HighCharts from 'highcharts';
require('highcharts/modules/exporting')(HighCharts);

/**
 * Graph Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class BarGraph extends React.Component {
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

  _initChart() {
    var {count} = this.props.stats;

    this.chart = HighCharts.chart(this.refs.barGraph, {
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
          y: count.over_speeding,
          drilldown: 'Over Speeding'
        }, {
          name: 'Wrong Lane',
          y: count.wrong_lane,
          drilldown: 'Wrong Lane'
        }, {
          name: 'Beating the Red Light',
          y: count.beating_red_light,
          drilldown: 'Beating the Red Light'
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
        drilldown: 'Over Speeding'
      }, {
        name: 'Wrong Lane',
        y: count.wrong_lane,
        drilldown: 'Wrong Lane'
      }, {
        name: 'Beating the Red Light',
        y: count.beating_red_light,
        drilldown: 'Beating the Red Light'
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
        <div className="chart" ref="barGraph"></div>
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
