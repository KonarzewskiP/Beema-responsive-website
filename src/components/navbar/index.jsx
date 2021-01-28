import React from 'react';
import styled from "styled-components";
import Logo from "../logo";
import Button from "../button";
import Marginer from "../marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BrandContainer = styled.div`

`

const AccessibilityComponent = styled.div`
  display: flex;
  flex-direction: row;
`

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(200, 200, 200);
  }
`

const Navbar = (props) => {
    return (
        <NavbarContainer>
            <BrandContainer>
                <Logo inline/>
            </BrandContainer>
            <AccessibilityComponent>
                <Button small>Get Started</Button>
                <Marginer direction="horizontal" margin="8px"/>
                <LoginButton small>Login</LoginButton>
            </AccessibilityComponent>
        </NavbarContainer>
    );
};

export default Navbar;