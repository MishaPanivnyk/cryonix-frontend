import { Container } from 'components/Container/Container';
import {
  WhatBookixContainer,
  WhatBookixText,
  WhatBookixTitle,
} from './WhatBookix.styled';

export const WhatBookix: React.FC = () => {
  return (
    <WhatBookixContainer>
      <Container>
        <WhatBookixTitle>What is Bookix?</WhatBookixTitle>
        <WhatBookixText>
          Bookix is a book exchange platform that allows users to easily trade
          books they've read with other reading enthusiasts in their city or
          even around the world. The main idea of Bookix is to create a
          community of readers who share their books, helping each other
          discover new and interesting works to read. <br />
          <br /> Bookix simplifies the book exchange process, making it
          convenient and safe. It is not only a platform for exchanging books
          but also a place for bringing together literature lovers.
        </WhatBookixText>
      </Container>
    </WhatBookixContainer>
  );
};
