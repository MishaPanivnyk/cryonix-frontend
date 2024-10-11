import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 7px 15px;
  border-radius: 20px;
  background: #fff;
  position: relative;
  top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: 12px 15px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 16.5px 15px;
  }
`;
export const HeaderLogo = styled.span`
  color: #720036;
  font-family: 'Climate Crisis';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
export const HeaderBurgerBtn = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;
  display: block;
  & svg {
    width: 20px;
    height: 20px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const HeaderNav = styled.nav`
  cursor: pointer;
  background: inherit;
  border: none;
  display: block;
  & svg {
    width: 20px;
    height: 20px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const HeaderBtnAuthContainer = styled.div`
  display: flex;
  gap: 16px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;

export const HeaderBtnAuth = styled.button`
  padding: 9px 26px;
  cursor: pointer;
  background: inherit;
  border: none;
  display: block;
  color: #222;
  font-family: 'Rubik';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.036px;
  border-radius: 10px;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #720036;
    color: #ff971d;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    letter-spacing: 0.048px;
  }
`;
export const HeaderBtnAuthSignUp = styled.button`
  padding: 9px 26px;
  cursor: pointer;

  border: none;
  display: block;
  color: #fbfbfb;
  font-family: 'Rubik';
  font-size: 12px;
  font-style: normal;
  border-radius: 10px;
  background-color: #720036;
  font-weight: 500;
  line-height: normal;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: inherit;
    color: #ff971d;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
