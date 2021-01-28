import React from 'react';
import styled, {css} from "styled-components";

import BeemaLogo from "../../assets/logo/logo_croped.png";
import {theme} from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({inline}) => inline ? "row" : "column"};
  //align-items: ${({inline}) => inline && "center"};
  justify-content: center;
`

const LogoImg = styled.img`
  width: 8em;
  height: 8em;

  ${({inline}) => inline && css`
    width: 25px;
    height: 25px;
    margin-right: 6px;
  `};

  ${({small}) => small && css`
    width: 5em;
    height: 5em;
  `};
`;

const LogoText = styled.div`
  margin-top: ${({inline}) => inline ? 0 : "6px"};
  font-size: ${({inline, small}) => inline ? "18px" : small ? "21px" : "40px"};
  color: ${({inline}) => inline ? "#fff" : theme.primary};
  font-weight: 900;
  text-align: center;
`

const Logo = (props) => {
    const {inline, small} = props;

    return (
        <LogoContainer inline={inline} small={small}>
            <LogoImg src={BeemaLogo} inline={inline} small={small}/>
            <LogoText inline={inline} small={small}>Beema</LogoText>
        </LogoContainer>
    );
};

export default Logo;