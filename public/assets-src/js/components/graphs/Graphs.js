'use strict';

import React from 'react';
import BarGraph from './BarGraph';
import ViolationActions from '../../actions/ViolationActions';
import Stores from '../../stores';
import PieGraph from './PieGraph';
import DatePicker from 'react-datepicker';
import moment from 'moment';

/**
 * Graph Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Graphs extends React.Component {

  constructor(props) {
    super(props);

    this.startDate = moment();
    this.endDate = moment().add(7, 'days');

    this.state = {
      count: null,
      startDate: moment(),
      endDate: moment().add(7, 'days')
    };
  }

  componentDidMount() {
    ViolationActions.getCount();
    Stores.ViolationsStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    Stores.ViolationsStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    var count = Stores.ViolationsStore.getCount();
    this.setState({
      count
    });
  }

  _getGraphs() {
    var {count} = this.state;

    return (
        <div className="graphs">
          <PieGraph stats={count}/>
          <BarGraph stats={count}/>
        </div>
    );
  }

  _handleStartDateChange(startDate) {

    if (startDate > this.state.endDate) {
      window.alert('Start date must be less than the end date!');
      return;
    }

    this.startDate = startDate;

    this.setState({startDate})
    this._request();
  }

  _handleEndDateChange(endDate) {
    if (endDate < this.state.startDate) {
      window.alert('End date must not be less than the start date!');
      return;
    }

    this.endDate = endDate;

    this.setState({endDate});
    this._request();
  }

  _request() {
    var data = {
      startDate: this.startDate.format('YYYY-MM-DD'),
      endDate: this.endDate.format('YYYY-MM-DD')
    };

    ViolationActions.getCount(data);
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var graphs = this.state.count != null ? this._getGraphs() : '';

    return (
        <div className="ui center aligned container graphs-component">
          <h1>Graphs</h1>
          <div className="ui grid form dates">
            <div className="eight wide column">
              <label>Start Date</label>
              <DatePicker ref="startDate" className="start-date" selected={this.state.startDate}
                          onChange={this._handleStartDateChange.bind(this)}/>
            </div>
            <div className="eight wide column">
              <label>End Date</label>
              <DatePicker ref="endDate" className="end-date" selected={this.state.endDate}
                          onChange={this._handleEndDateChange.bind(this)}/>
            </div>
          </div>
          {graphs}
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
Graphs.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
Graphs.defaultProps = {};

export default Graphs;
