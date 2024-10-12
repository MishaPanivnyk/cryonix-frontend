import styled from 'styled-components';
import BgImgPc from '../../img/background-main-pc.jpg';

export const BackImg = styled.div`
  background: url(${BgImgPc});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: center; */
  min-height: calc(100vh - 346px);
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
    min-height: calc(100vh - 100px);
  }
`;
