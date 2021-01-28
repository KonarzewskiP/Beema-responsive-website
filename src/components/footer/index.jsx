import React from 'react';
import styled from "styled-components";
import Marginer from "../marginer";
import Logo from "../logo";
import Button from "../button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #1f1f1f;
`
const MotivationalText = styled.h1`
  font-size: 28px;
  line-height: 1.4;
  font-weight: lighter;
  color: #ffffff;
  margin: 0;
  text-align: center;
`
const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

const AccessibilityContainer = styled.div`
  width: 90%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding: 12px 8px 0 8px;
  color: #ffffff;
  justify-content: space-between;
`

const PrivacyContainer = styled.div`
  display: flex;
`

const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  color: #ffffff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 12px;
  }

  &:hover {
    color: #adadad;
  }
`
const Link = styled.a`
  color: #ffffff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 15px;

  &:not(:last-of-type) {
    margin-right: 12px;
  }

  &:hover {
    color: #adadad;

  }
`
const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translate(-50%);
  color: #ffffff;
  font-size: 12px;
`

const Footer = () => {
    return (
        <FooterContainer>
            <Marginer direction="vertical" margin="3em"/>
            <Logo small/>
            <Marginer direction="vertical" margin="2em"/>
            <MotivationalText>Just say the magical word</MotivationalText>
            <MotivationalText>and we will do the rest</MotivationalText>
            <Marginer direction="vertical" margin="1em"/>
            <Button>Start Your Project</Button>
            <Marginer direction="vertical" margin="5em"/>
            <AccessibilityContainer>
                <PrivacyContainer>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Service</Link>
                    <Link>Contact</Link>
                </PrivacyContainer>
                <SocialContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </SocialIcon>
                </SocialContainer>
            </AccessibilityContainer>
            <RightsReserved> © 2020 Beema All rights reserved</RightsReserved>
        </FooterContainer>
    );
};

export default Footer;