/*global google*/
import React, { Component } from "react";
import styled from "styled-components";
import { compose, withProps } from "recompose";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA1v1FQ5PiNvFB1Cfd_ATVHKvennlM3dtw",
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
      {props.isInfoShown && 
        <InfoBox 
        defaultPosition={new google.maps.LatLng(-7.591975, 110.644447)}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}>
          <div style={{ backgroundColor: `#89CFF0`, opacity: 0.75, padding: `12px` }}>
            <div style={{ fontSize: `12px`, fontColor: `#08233B` }}>
              Omah Ihrom Janti
            </div>
          </div>
      </InfoBox>
      }
    </div>
  </GoogleMap>
));
export default class ContactMe extends Component {
  state = {
    isInfoShown: false,
    activeMarker: {}
  };

  handleMarkerClick = () => {
    this.setState({ isInfoShown: true })
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
