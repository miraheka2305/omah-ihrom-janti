import React, { Component } from "react";
import styled from "styled-components";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
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
    <div>
      <Marker
        position={{ lat: -7.591975, lng: 110.644447 }}
        onClick={props.onMarkerClick}
        name={"Omah Ihrom Janti"}
      />
      {props.isInfoShown && (
        <InfoWindow
          marker={props.activeMarker}
          visible={props.isInfoShown}
          onClose={props.onClose}
        />
      )}
    </div>
  </GoogleMap>
));
export default class ContactMe extends Component {
  state = {
    isInfoShown: false,
    activeMarker: {}
  };

  handleMarkerClick = (marker, e) => {
    this.setState({ isInfoShown: true, activeMarker: marker });
  };

  onClose = () => {
    this.setState({
      isInfoShown: false,
      activeMarker: null
    });
  };

  render() {
    return (
      <ContactWrapper>
        <BodyWrapper>
          <MapComponent
            isInfoShown={this.state.isInfoShown}
            onMarkerClick={this.handleMarkerClick}
            activeMarker={this.state.activeMarker}
            onClose={this.onClose}
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
