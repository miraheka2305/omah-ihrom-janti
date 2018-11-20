import React, { Component } from "react";
import styled from "styled-components";
import Image from "../../assets/about-banner.jpg";

export default class About extends Component {
  render() {
    return (
      <AboutWrapper>
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
      </AboutWrapper>
    );
  }
}

const AboutWrapper = styled.div`
  width: 100vw;
  background: white;
  @media only screen and (min-width: 1024px) {
    height: 1000px;
    padding: 0 20px;
  }
`;

const AboutImage = styled.img`
  width: 300px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    width: 600px;
  }
  @media only screen and (min-width: 1024px) {
    width: 800px;
  }
`;

const TextWrapper = styled.div`
  height: auto;
  margin: 30px 0;
  padding: 0 20px;
  @media only screen and (min-width: 1024px) {
    width: 600px;
    margin: 100px auto 0 auto;
  }
`;

const Title = styled.p`
  font-size: 18px;
  text-align: center;
  color: #3f3f3f;
  @media only screen and (min-width: 768px) {
    font-size: 26px;
  }
`;
const Text = styled.p`
  font-size: 14px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 17px;
  }
`;
