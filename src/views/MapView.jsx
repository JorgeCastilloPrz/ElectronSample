import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Image extends React.Component {
  render() {
    return <img width={36} height={36} src={require('../assets/marker.png')}/>;
  }
}

export default class MapView extends Component {
  static defaultProps = {
    center: {
      lat: 37.992956,
      lng: -1.130670
    },
    zoom: 16
  };

  render() {
    return (<GoogleMapReact bootstrapURLKeys={{
        key: ["AIzaSyB8f11FMT-lEbRysgdZ9651Ko4iyiMjgQQ"]
      }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>

      <Image lat={37.992956} lng={-1.130670} />
    </GoogleMapReact>);
  }
}
