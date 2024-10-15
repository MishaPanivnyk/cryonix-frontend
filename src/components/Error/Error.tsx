import { Container } from 'components/Container/Container';
import {
  ErrorBtn,
  ErrorImg,
  ErrorMessage,
  ErrorContainer,
  ErrorStyledContainer,
  ErrorTitle,
} from './Error.styled';
import errorSpiritImg from 'img/ErrorSpirit.svg';
import arrowGoToHome from 'img/Group 1.svg';

type ErrorPropsType = {
  errorCode: string;
};

const errorMessages = {
  '404': 'Lost in Space! 🛸',
  '500': 'Oops! We Broke It 💥',
  '403': 'Access Denied, Human! 🛑',
  '401': 'Who Goes There? 🔍',
  '400': 'Oops! Something Went Wrong 🤦‍♂️',
  '429': 'Whoa! Slow Down! 🐢',
  '503': 'We’re on a Coffee Break ☕',
  '502': 'Bad Gateway! The Internet’s Broken 😱',
  '504': 'The Server Took a Nap 💤',
  '415': 'Nice Try, But We Don’t Speak That 📼',
};


const Errors = ({ errorCode }: ErrorPropsType) => {
  return (
    <ErrorContainer>
      <Container>
        <ErrorStyledContainer>
          <ErrorMessage>{errorMessages[errorCode as keyof typeof errorMessages]}</ErrorMessage>
          <ErrorTitle>{errorCode}</ErrorTitle>
          <ErrorImg src={errorSpiritImg} alt="error-spirit" />
          <ErrorBtn>
            <img src={arrowGoToHome} alt="arrow" />
            Go Home
          </ErrorBtn>
        </ErrorStyledContainer>
      </Container>
    </ErrorContainer>
  );
};

export default Errors;