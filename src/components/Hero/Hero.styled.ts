import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeroContainer = styled.section`
  padding-top: 30px;
  padding-bottom: 20px;
  @media only screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 33px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 65px;
    padding-bottom: 65px;
  }
`;
export const ImageWithOverlay = styled.div`
  position: relative;
  display: inline-block;
  img {
    border-radius: 20px;
    width: 100%;
    height: 171px;
    @media only screen and (min-width: 768px) {
      height: 307px;
    }
    @media only screen and (min-width: 1440px) {
      height: 393px;
    }
  }

  &::after {
    content: '';
    border-radius: 18px 0 0 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 5px;
    background: linear-gradient(90deg, #121212 4.05%, rgba(0, 0, 0, 0) 99.94%);
    z-index: 1;
    @media only screen and (min-width: 768px) {
      bottom: 4px;
    }
    @media only screen and (min-width: 1440px) {
    }
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  position: absolute;
  top: 16px;
  left: 20px;
  z-index: 6;
  max-width: 161px;
  @media only screen and (min-width: 768px) {
    max-width: 314px;
    font-size: 28px;
    top: 32px;
    left: 32px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 486px;
    font-size: 43px;
    top: 40px;
    left: 40px;
  }
`;
export const HeroBtn = styled(NavLink)`
  cursor: pointer;
  background: inherit;
  border: none;
  display: block;
  border-radius: 10px;
  background: #fff;
  color: #222;
  font-family: 'Rubik';
  font-size: 6px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.018px;
  padding: 7.5px 17px;
  position: absolute;
  top: 78px;
  left: 16px;
  z-index: 6;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #720036;
    color: #fff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
    top: 146px;
    left: 32px;
    font-size: 12px;
    padding: 11px 32px;
    letter-spacing: 0.036px;
  }
  @media only screen and (min-width: 1440px) {
    top: 218px;
    left: 40px;
    padding: 10px 59px;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.072px;
  }
`;
