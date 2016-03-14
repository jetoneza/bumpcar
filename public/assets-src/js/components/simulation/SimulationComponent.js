'use strict';

import React from 'react';
import Header from '../partials/Header';
import cx from 'classnames';

/**
 * Simulation Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class SimulationComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      processing: false
    };
  }

  /**
   * Handles file input on change
   * @param event
   */
  _handleFileChange(event) {
    var file = event.target.files[0];

    if (file != null) {
      var data = {
        name: file.name,
      };

      this.setState({
        processing: true
      });
    }
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {

    var uploadCx = cx({
      ui: true,
      button: true,
      teal: true,
      upload: true,
      loading: this.state.loading
    });

    return (
        <div className="simulation-component">
          <Header title="Simulation" path="/"/>
          <div className="simulation-content">
            <a className={uploadCx}>
              <input
                  ref="file"
                  type="file"
                  className="file"
                  value=""
                  onChange={this._handleFileChange.bind(this)}
              />
              <span className="button">Select file</span>
            </a>
          </div>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
SimulationComponent.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
SimulationComponent.defaultProps = {};

export default SimulationComponent;
