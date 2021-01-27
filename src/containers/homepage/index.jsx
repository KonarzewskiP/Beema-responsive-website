import React from 'react';
import styled from "styled-components";


import TopSection from "../topSection";
import GlobalStyle from "../../components/GlobalStyling";


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
        </PageContainer>
    )
}