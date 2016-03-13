'use strict';

import React from 'react';

/**
 * Map Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.map = null;
    this.google = null;
  }

  componentDidMount() {
    this._initMap();
  }

  _initMap() {
    var {mapCanvas} = this.refs;
    GoogleMaps.KEY = 'AIzaSyDr8XyBDTZwhdBKTfAhoEZNN85NsLQxQxU';
    GoogleMaps.LIBRARIES = ['geometry', 'places'];
    GoogleMaps.load((google) => {
      this.google = google;
      this._initialize(mapCanvas);
    });
  }

  /**

   * Initialize Google Maps Canvas
   * @param mapCanvas
   * @private
   */
  _initialize(mapCanvas) {
    var {place} = this.props;
    var {mapCanvas} = this.refs;

    var google = this.google;

    var PSSCC = {lat: 7.057180, lng: 125.599512};
    var place = {lat: parseFloat(place.latitude), lng: parseFloat(place.longitude)};

    var map = new google.maps.Map(mapCanvas, {
      center: PSSCC,
      scrollwheel: false,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      labels: true
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });

    // Set destination, origin and travel mode.
    var request = {
      destination: place,
      origin: PSSCC,
      travelMode: google.maps.TravelMode.DRIVING
    };

    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        // Display the route on the map.
        directionsDisplay.setDirections(response);
      }
    });
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="map-component">
          <h2>Map</h2>
          <div className="map" ref="mapCanvas"></div>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
Maps.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
Maps.defaultProps = {};

export default Maps;
