import { Container } from "postcss";
import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <LContainer>
      <CTA>
        <CTALogoOne img src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Global blockbusters from Disney, Marvel and more Malaysian hit movies
          and series Never-before-seen Disney+ Originals Astro Customer?
          Activate first at astro.com.my/Disney
        </Description>
        <CTALogoTwo img src="/images/cta-logo-two.png" />
      </CTA>
    </LContainer>
  );
}

export default Login;

const LContainer = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
    opacity: 0.8;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 80%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  margin-top: 100px;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  border-radius: 4px;
  padding: 17px 0px;
  color: #f9f9f9;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
