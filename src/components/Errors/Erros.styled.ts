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
`;
export const ErrorTitle = styled.span`
  color: #bcbcbc;
  font-size: 55vh;
  font-weight: 700;
  opacity: 0.3;
`;
export const ErrorImg = styled.img`
  position: absolute;
  width: 172;
  height: 332;
`;
export const ErrorBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #720036;
  padding: 14px 35px;
  font-size: 24px;
  font-weight: 400;
  color: #FFF;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
  img{
    padding: 10px;
    margin-right: 4px;
  }
`;
