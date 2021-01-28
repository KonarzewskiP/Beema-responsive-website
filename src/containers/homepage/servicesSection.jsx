import React from 'react';
import {Element} from 'react-scroll';
import styled from "styled-components";
import {SectionTitle} from "../../components/sectionTitle";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const ServicesSection = (props) => {
    return <ServicesContainer name="servicesSection">
        <SectionTitle>Best Quality Software</SectionTitle>
    </ServicesContainer>
};

export default ServicesSection;