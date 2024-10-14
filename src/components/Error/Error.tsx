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
import arrowGoToHome from 'img/GoToHomeBtn.svg';

type ErrorPropsType = {
  errorCode: string;
};

const errorMessages = {
  '404': 'You mustn’t be here!',
  '500': 'Internal Server Error',
  '403': 'Forbidden',
  '401': 'Unauthorized',
  '400': 'Bad Request',
  '429': 'Too Many Requests',
  '503': 'Service Unavailable',
  '502': 'Bad Gateway',
  '504': 'Gateway Timeout',
  '415': 'Unsupported Media Type',
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