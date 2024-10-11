import { Container } from 'components/Container/Container';
import {
  HeaderBtnAuth,
  HeaderBtnAuthContainer,
  HeaderBurgerBtn,
  HeaderContainer,
  HeaderLogo,
  HeaderBtnAuthSignUp,
} from './Header.styled';
import sprite from '../../img/sprite.svg';
import { useMediaQuery } from 'react-responsive';
import { Navigation } from './Navigation/Navigation';

export const Header: React.FC = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  //   const isMobile = useMediaQuery({
  //     query: '(max-width: 767px)',
  //   });
  return (
    <Container>
      <HeaderContainer>
        <HeaderLogo>Bookix</HeaderLogo>
        {isDesktop && <Navigation />}
        {isDesktop && (
          <HeaderBtnAuthContainer>
            <HeaderBtnAuth>Log in</HeaderBtnAuth>
            <HeaderBtnAuthSignUp>Sign Up</HeaderBtnAuthSignUp>
          </HeaderBtnAuthContainer>
        )}
        <HeaderBurgerBtn>
          <svg className="icon-burger">
            <use href={sprite + '#icon-burger'} />
          </svg>
        </HeaderBurgerBtn>
      </HeaderContainer>
    </Container>
  );
};
