import React, { Component } from "react";
import styled from "styled-components";
import Image from "../../assets/about-banner.jpg";

export default class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <BodyWrapper>
          <AboutImage src={Image} />
          <TextWrapper>
            <Title>Omah Ihrom Janti</Title>
            <Text>
              As an independent watch brand, we have devoting the past year to
              create our unique design. Our incredible timepiece possesses four
              elements: minimalist, stylishness, artistry and functionality.
            </Text>
            <Text>
              Our brand name - Vintique integrates “Vintage” and “Antique”. We
              turn back the clock and bring archaic fashion into our modern
              design. Our watches perfectly suit every style of dressing.
            </Text>
            <Text>
              Good timepiece come and go, but the extraordinary one will last
              forever.
            </Text>
          </TextWrapper>
        </BodyWrapper>
      </AboutWrapper>
    );
  }
}

const AboutWrapper = styled.div`
  width: 100vw;
  background: white;
`;

const BodyWrapper = styled.div`
  height: 1000px;
  width: 100%;
  padding: 0 20px;
`;

const AboutImage = styled.img`
  width: 800px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const TextWrapper = styled.div`
  width: 600px;
  height: auto;
  margin: 100px auto 0 auto;
`;

const Title = styled.p`
  font-size: 26px;
  text-align: center;
  color: #3f3f3f;
`;
const Text = styled.p`
  font-size: 17px;
  text-align: center;
`;
