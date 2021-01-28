import React from 'react';
import styled from "styled-components";


const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({isReversed}) => isReversed && "row-reverse"};
    /*flex-direction: ${({isReversed}) => isReversed ? "row-reverse" : ""};*/
  margin-bottom: 2em;

`

const ServiceImg = styled.img`
  width: 22em;
  height: 17em;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  align-items: center;

`

const Title = styled.h2`
  color: #000000;
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;

`

const Details = styled.p`
  color: #7a7a7a;
  font-size: 21px;
  text-align: center;
  max-width: 55%;
`


const OurService = (props) => {
    const {title, description, imgUrl, isReversed} = props;
    return (
        <ServiceContainer isReversed={isReversed}>
            <DescriptionContainer>
                <Title>{title}</Title>
                <Details>{description}</Details>
            </DescriptionContainer>
            <ServiceImg src={imgUrl}/>
        </ServiceContainer>
    );
};

export default OurService;