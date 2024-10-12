import styled from 'styled-components';

export const WhatBookixContainer = styled.section`
  padding-bottom: 20px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 33px;
  }
  @media only screen and (min-width: 1440px) {
    padding-bottom: 65px;
  }
`;
export const WhatBookixTitle = styled.h2`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.06px;
  text-transform: capitalize;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.12px;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 50px;
    font-size: 60px;
    letter-spacing: 0.18px;
  }
`;
export const WhatBookixText = styled.p`
  color: #fff;
  font-family: 'Inter';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 38px;
  }
`;
