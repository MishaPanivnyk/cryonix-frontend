import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PopularBooksContainer = styled.section`
  padding-bottom: 20px;
  position: relative;
  @media only screen and (min-width: 768px) {
    padding-bottom: 33px;
  }
  @media only screen and (min-width: 1440px) {
    padding-bottom: 65px;
  }
`;
export const PopularBooksTitle = styled.h2`
  color: #fff;
  font-size: 24px;
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
export const PopularBooksSwiperContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;
export const PopularBooksSwiperItem = styled.div`
  background-color: white;
  width: 216px;
  height: 135px;
  border-radius: 10px;
  @media only screen and (min-width: 768px) {
    width: 239px;
    height: 208px;
  }
  @media only screen and (min-width: 1440px) {
    width: 384px;
    height: 289px;
  }
`;
export const CustomPrevButton = styled.div`
  /* width: 25px;
  height: 25px; */
  padding: 14px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 10px;
  transform: translateY(-50%);
  top: 50%;
  z-index: 10;
  cursor: pointer;
  & svg {
    fill: black;
  }
  @media only screen and (min-width: 768px) {
    padding: 16px 15px;
  }
  @media only screen and (min-width: 1440px) {
    border-radius: 50px;
    padding: 20px 19px;
  }
`;

export const CustomNextButton = styled.div`
  /* width: 25px;
  height: 25px; */
  padding: 14px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  z-index: 10;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    padding: 16px 15px;
  }
  @media only screen and (min-width: 1440px) {
    border-radius: 50px;
    padding: 20px 19px;
  }
`;
export const PopularBooksBtn = styled(NavLink)`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: #fff;
  color: #222;
  font-family: 'Rubik';
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.03px;
  padding: 0 26.5px;
  width: fit-content;
  display: flex;
  align-items: center;
  margin: 0 auto;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #720036;
    color: #fff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
    border-radius: 7px;
    height: 49px;
    font-size: 16px;
    letter-spacing: 0.048px;
    padding: 4.5px 46.5px;
  }
  @media only screen and (min-width: 1440px) {
    border-radius: 20px;
    height: 81px;
    font-size: 24px;
    letter-spacing: 0.072px;
    padding: 20px 78px;
  }
`;
