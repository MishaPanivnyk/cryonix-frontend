import { Container } from 'components/Container/Container';
import {
  ErrorImg,
  ErrorMessage,
  ErrorsContainer,
  ErrorStyledContainer,
  ErrorTitle,
} from './Erros.styled';
import errorSpiritImg from 'img/ErrorSpirit.svg';

type ErrorPropsType = {
  errorCode: string;
};

const Errors = ({ errorCode }: ErrorPropsType) => {
  return (
    <ErrorsContainer>
      <Container>
        <ErrorStyledContainer>
          {errorCode === '404' && (
            <ErrorMessage>You mustn’t be here!</ErrorMessage>
          )}
          {errorCode === '500' && (
            <ErrorMessage>Internal Server Error</ErrorMessage>
          )}
          {errorCode === '403' && <ErrorMessage>Forbidden</ErrorMessage>}
          {errorCode === '401' && <ErrorMessage>Unauthorized</ErrorMessage>}
          {errorCode === '400' && <ErrorMessage>Bad Request</ErrorMessage>}
          {errorCode === '429' && (
            <ErrorMessage>Too Many Requests</ErrorMessage>
          )}
          {errorCode === '503' && (
            <ErrorMessage>Service Unavailable</ErrorMessage>
          )}
          {errorCode === '502' && <ErrorMessage>Bad Gateway</ErrorMessage>}
          {errorCode === '504' && <ErrorMessage>Gateway Timeout</ErrorMessage>}
          {errorCode === '415' && (
            <ErrorMessage>Unsupported Media Type</ErrorMessage>
          )}
          <ErrorTitle>{errorCode}</ErrorTitle>
          <ErrorImg src={errorSpiritImg} />
        </ErrorStyledContainer>
      </Container>
    </ErrorsContainer>
  );
};

export default Errors;
