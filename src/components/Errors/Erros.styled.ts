import styled from 'styled-components';

export const ErrorsContainer = styled.section`
  padding-top: 50px;
  padding-bottom: 30px;
`;
export const ErrorStyledContainer = styled.div`
  background-color: #ffffff;
  border-radius: 50px;
  padding-top: 43px;
  padding-bottom: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ErrorMessage = styled.h1`
  color: #222;
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 25px;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 18px;
  }
`;
export const ErrorTitle = styled.span`
  color: #bcbcbc;
  font-weight: 700;
  opacity: 0.3;
  font-size: 35vw;
`;
export const ErrorImg = styled.img`
  position: absolute;
  width: 12vw;
`;
export const ErrorBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #720036;
  padding: 14px 35px;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-transform: capitalize;
  border: none;
  cursor: pointer;

  img {
    padding: 10px;
    margin-right: 4px;
  }

  &:hover,
  &:focus {
    opacity: 0.8;
    transform: scale(1.05);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media only screen and (max-width: 768px) {
    padding: 8px 20px;
    font-size: 13px;
    img{
        padding: 5px;
        margin-right: 2px;
        width: 8vw;
    }
  }
`;
