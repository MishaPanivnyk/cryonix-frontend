import styled from 'styled-components';
import { css } from 'styled-components';


const maxWidth = 1920;

const adaptivFont = (pcSize : number, mobSize : number) => {
  const addSize = pcSize - mobSize;
  const adjustedMaxWidth = maxWidth - 320;

  return css`
    font-size: calc(${mobSize}px + ${addSize} * ((100vw - 320px) / ${adjustedMaxWidth}));
  `;
};

export const ErrorContainer = styled.section`
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
  ${adaptivFont(36, 14)}
  font-weight: 400;
  margin-bottom: 25px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 18px;
  }
`;
export const ErrorTitle = styled.span`
  color: #bcbcbc;
  font-weight: 700;
  opacity: 0.3;
  ${adaptivFont(400, 100)}
`;
export const ErrorImg = styled.img`
  position: absolute;
  width: 7vw;
`;
export const ErrorBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #720036;
  padding: 14px 35px;
  ${adaptivFont(24, 14)}
  font-weight: 400;
  color: #fff;
  text-transform: capitalize;
  border: none;
  cursor: pointer;

  img {
    margin-right: 8px;
    width: 35px;
    height: 35px;
  }

  &:hover,
  &:focus {
    opacity: 0.8;
    transform: scale(1.05);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media only screen and (max-width: 768px) {
    padding: 8px 20px;
    img{
      width: 18px;
      height: 18px;
    }
  }
`;
