import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 25px;
`;

export const Link = styled(NavLink)`
  padding: 10px;
  color: #222;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    margin-right: 0px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
  &:hover,
  &:focus {
    color: #720036;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
