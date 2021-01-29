import React from 'react';
import styled from "styled-components";
import {Element} from "react-scroll";
import {SectionTitle} from "../../components/sectionTitle";

import AboutImgUrl from "../../assets/illustrations/rocket_launch_.png"
import Marginer from "../../components/marginer";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;

  @media (max-width: 480px) {
    width: 100%;
  }
`

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`

const AboutText = styled.p`
  font-size:  21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;

`

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 3em;
  @media (max-width: 480px) {
    width: 350px;
    height: 270px;
    margin-left: 0;
  }
`

const MoreAboutSection = () => {
    return (
        <MoreAboutContainer>
            <SectionTitle>More About Beema</SectionTitle>
            <Marginer direction="vertical" margin="2em" />
            <AboutContainer>
                <AboutText>
                    Beema is about designing, building and deliverying best quality software for your company.
                    {<br/>}{<br/>}
                    We make sure that you get the best software inferstracture and set of applications to ensure the
                    best experience of your clients.
                    {<br/>}{<br/>}
                    So wether you are handling thousands of payment transactions or you’re just starting out, you are in
                    the right place.
                </AboutText>
                <AboutImg src={AboutImgUrl}/>
            </AboutContainer>
        </MoreAboutContainer>
    );
};

export default MoreAboutSection;