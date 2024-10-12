import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: #fff;
  padding: 10px 0;
  @media only screen and (min-width: 768px) {
    padding: 45px 0;
  }
  @media only screen and (min-width: 1440px) {
  }
  .icon-logo {
    width: 59px;
    height: 54px;
    @media only screen and (min-width: 768px) {
      width: 91.235px;
      height: 86px;
    }
    @media only screen and (min-width: 1440px) {
    }
  }
`;
export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  @media only screen and (min-width: 768px) {
    gap: 8px;
  }
  @media only screen and (min-width: 1440px) {
    gap: 10px;
  }
`;
export const FooterLogoLink = styled(NavLink)`
  cursor: pointer;
  & svg {
    width: 59px;
    height: 54px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover svg {
    transform: scale(1.2);
  }
`;
export const FooterPhone = styled.a`
  color: #222;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #720036;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 32px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
export const FooterEmail = styled.a`
  color: #222;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.65;
  cursor: pointer;
  margin-bottom: 15px;
  &:hover,
  &:focus {
    color: #720036;
  }
  @media only screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 32px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  margin-bottom: 19px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 1440px) {
    gap: 181px;
  }
`;
export const FooterNavContainer = styled.div`
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
    gap: 0;
  }
`;
export const FooterNavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  @media only screen and (min-width: 1440px) {
    row-gap: 50px;
    column-gap: 200px;
  }
`;
export const FooterInfoTitle = styled.h3`
  color: #222;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    grid-column: span 2;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
export const FooterNavLink = styled(NavLink)`
  color: #222;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.65;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 16px;
  }
  &:hover,
  &:focus {
    color: #720036;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const FooterInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;

  @media only screen and (min-width: 768px) {
    gap: 0;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const FooterInputButtonContainer = styled.div`
  position: relative;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const FooterInput = styled.input`
  border-radius: 6px;
  width: 148px;
  border: 1px solid #dedede;
  background: #fbfbfb;
  color: #222;
  padding: 11px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.65;
  @media only screen and (min-width: 768px) {
    font-size: 12px;
    width: 216px;
    padding: 18px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 14px;
    width: 270.608px;
    padding: 20px;
  }
`;
export const FooterInputButton = styled.button`
  background-color: #720036;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 6px 6px 0px;
  background: #720036;
  position: absolute;
  bottom: 27px;
  right: 0;
  width: 35px;
  height: 36px;

  & svg {
    fill: white;
    width: 14px;
    height: 13.045px;
    @media only screen and (min-width: 768px) {
      width: 14.166px;
      height: 16.673px;
    }
    @media only screen and (min-width: 1440px) {
    }
  }
  @media only screen and (min-width: 768px) {
    bottom: 0px;
    width: 54px;
    height: 52px;
  }
  @media only screen and (min-width: 1440px) {
    height: 59px;
  }
`;
export const FooterProduct = styled.p`
  color: #222;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  margin-bottom: 15px;
  & svg {
    width: 34.358px;
    height: 32.387px;
    cursor: pointer;
    &:hover svg {
      transform: scale(1.2);
    }
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const FooterProductSocList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 15px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const FooterProductSocItem = styled.li`
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const FooterProductSocLink = styled.a`
  cursor: pointer;
  & svg {
    fill: inherit;
    width: 18.841px;
    height: 18.815px;
    @media only screen and (min-width: 768px) {
      width: 38.191px;
      height: 38.138px;
    }
    @media only screen and (min-width: 1440px) {
      width: 38.191px;
      height: 38.138px;
    }
  }
  &:hover svg {
    fill: #720036;
  }

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const FooterCopyright = styled.p`
  color: #222;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const FooterBootomContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 24px;
    border-top: 1px solid rgba(34, 34, 34, 0.06);
    ${FooterProduct} {
      order: 1;
    }
    ${FooterProductSocList} {
      order: 0;
    }
    ${FooterCopyright} {
      order: 3;
    }
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 55px;
  }
`;
export const FooterTopContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 47px;
    justify-content: space-between;
    margin-bottom: 37px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 55px;
  }
`;
