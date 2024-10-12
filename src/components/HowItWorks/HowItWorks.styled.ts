import styled from 'styled-components';

export const HowItWorksContainer = styled.section`
  padding-bottom: 20px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 33px;
  }
  @media only screen and (min-width: 1440px) {
    padding-bottom: 65px;
  }
`;
export const HowItWorksTitle = styled.h2`
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
export const HowItWorksList = styled.ul`
  display: flex;
  gap: 15px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const HowItWorksListItem = styled.li`
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  width: 90px;
  height: 90px;
  position: relative;
  .icon-svg {
    width: 49px;
    height: 49px;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    @media only screen and (min-width: 768px) {
      border-radius: 150px 150px 0 0;
      width: 119px;
      bottom: 0;
      height: 59px;
    }
    @media only screen and (min-width: 1440px) {
      border-radius: 150px 150px 0 0;
      width: 231px;
      height: 115.5px;
    }
  }
  .icon-svg-rotate {
    width: 49px;
    height: 49px;
    position: absolute;
    top: -12px;
    right: 50%;
    transform: rotate(180deg) translateX(-50%);
    @media only screen and (min-width: 768px) {
      border-radius: 150px 150px 0 0;
      width: 119px;
      top: 0;
      height: 59px;
    }
    @media only screen and (min-width: 1440px) {
      border-radius: 150px 150px 0 0;
      width: 231px;
      height: 115.5px;
    }
  }
  .semi-circle {
    width: 41px;
    height: 20px;
    bottom: 0;
    left: 50%;
    background-color: #730137;
    border-radius: 60px 60px 0 0;
    position: absolute;
    transform: translateX(-50%);
    @media only screen and (min-width: 768px) {
      border-radius: 150px 150px 0 0;
      width: 100px;
      height: 50px;
    }
    @media only screen and (min-width: 1440px) {
      border-radius: 150px 150px 0 0;
      width: 190px;
      height: 95px;
    }
  }
  .semi-circle-rotate {
    width: 41px;
    height: 20px;
    top: 0;
    right: 50%;
    transform: rotate(180deg) translateX(-50%);
    background-color: #a9316a;
    border-radius: 100px 100px 0 0;
    position: absolute;
    @media only screen and (min-width: 768px) {
      border-radius: 150px 150px 0 0;
      width: 100px;
      height: 50px;
    }
    @media only screen and (min-width: 1440px) {
      border-radius: 150px 150px 0 0;
      width: 190px;
      height: 95px;
      background-color: #730137;
    }
  }
  .text-width {
    max-width: 70px;
    @media only screen and (min-width: 768px) {
      max-width: 145px;
    }
    @media only screen and (min-width: 1440px) {
      max-width: 270px;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
    padding-left: 17px;
  }
  @media only screen and (min-width: 1440px) {
    width: 375px;
    height: 380px;
    padding-top: 30px;
    padding-left: 25px;
  }
`;
export const HowItWorksListItemLarge = styled(HowItWorksListItem)`
  border-radius: 10px 40px;
  padding-top: 20px;
  @media only screen and (min-width: 768px) {
    padding-top: 30px;
    border-radius: 15px 100px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 75px;
    border-radius: 20px 190px;
  }
`;
export const HowItWorksListItemLargeTop = styled(HowItWorksListItem)`
  padding-top: 30px;
  @media only screen and (min-width: 768px) {
    padding-top: 50px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 120px;
  }
`;
export const HowItWorksListItemNumber = styled.span`
  color: #720036;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 0.06px;
  @media only screen and (min-width: 768px) {
    font-size: 50px;
    letter-spacing: 0.15px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 15px;
    font-size: 132px;
    line-height: 90px;
    letter-spacing: 0.396px;
  }
`;
export const HowItWorksListItemText = styled.p`
  color: #222;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.03px;
  max-width: 63px;
  @media only screen and (min-width: 768px) {
    max-width: 125px;
    font-size: 20px;
    letter-spacing: 0.06px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 248px;
    font-size: 38px;
    line-height: 40px;
    letter-spacing: 0.114px;
  }
`;
