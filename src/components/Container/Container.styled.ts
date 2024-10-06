import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 375px;
  @media only screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }
  @media only screen and (min-width: 1200px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1200px;
  }
`;
