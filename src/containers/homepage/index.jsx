import React from 'react';
import styled from "styled-components";


import TopSection from "./topSection";
import GlobalStyle from "../../components/GlobalStyling";
import ServicesSection from "./servicesSection";
import ReviewsSection from "./reviewsSection";
import Marginer from "../../components/marginer";
import MoreAboutSection from "./moreAboutSection";


const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export function Homepage(props) {
    return (
        <PageContainer>
            <GlobalStyle/>
            <TopSection/>
            <ServicesSection/>
            <Marginer direction="vertical" margin="2em" />
            <ReviewsSection/>
            <Marginer direction="vertical" margin="2em" />
            <MoreAboutSection />
        </PageContainer>
    );
}