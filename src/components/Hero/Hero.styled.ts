import styled from 'styled-components';

export const HeroContainer = styled.section`
  padding-top: 30px;
  padding-bottom: 20px;
  @media only screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 33px;
  }
  @media only screen and (min-width: 1024px) {
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
    @media only screen and (min-width: 1024px) {
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
    @media only screen and (min-width: 1024px) {
    }
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
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
  top: 32px;
  left: 32px;
  z-index: 6;
  max-width: 161px;
  @media only screen and (min-width: 768px) {
    max-width: 314px;
    font-size: 28px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 486px;
    font-size: 43px;
  }
`;
export const HeroBtn = styled.button`
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
  @media only screen and (min-width: 768px) {
    top: 146px;
    left: 32px;
    font-size: 12px;
    padding: 11px 32px;
    letter-spacing: 0.036px;
  }
  @media only screen and (min-width: 1024px) {
    top: 218px;
    left: 40px;
    padding: 10px 59px;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.072px;
  }
`;
