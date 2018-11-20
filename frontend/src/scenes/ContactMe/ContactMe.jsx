import React, { Component } from "react";
import styled from "styled-components";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px`, width: "100%" }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultCenter={{ lat: -7.591975, lng: 110.644447 }}
    defaultZoom={13}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -7.591975, lng: 110.644447 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));
export default class ContactMe extends Component {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedMarker();
  }

  delayedMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedMarker();
  };

  render() {
    return (
      <ContactWrapper>
        <BodyWrapper>
          <MapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
          />
        </BodyWrapper>
      </ContactWrapper>
    );
  }
}

const ContactWrapper = styled.div`
  width: 100vw;
  background: white;
`;

const BodyWrapper = styled.div`
  width: 100%;
`;
