'use strict';

import React from 'react';
import BarGraph from './BarGraph';
import ViolationActions from '../../actions/ViolationActions';
import Stores from '../../stores';
import PieGraph from './PieGraph';

/**
 * Graph Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Graphs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: null
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

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var graphs = this.state.count != null ? this._getGraphs() : '';

    return (
        <div className="ui center aligned container graphs-component">
          <h1>Graphs</h1>
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
