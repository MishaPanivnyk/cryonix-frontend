import { Container } from 'components/Container/Container';
import sprite from 'img/sprite.svg';
import {
  FooterContainer,
  FooterEmail,
  FooterInfoContainer,
  FooterLogoLink,
  FooterNavContainer,
  FooterNavLink,
  FooterInfoTitle,
  FooterPhone,
  FooterLinksContainer,
  FooterInputContainer,
  FooterInput,
  FooterInputButton,
  FooterInputButtonContainer,
  FooterProduct,
  FooterProductSocList,
  FooterProductSocItem,
  FooterProductSocLink,
  FooterCopyright,
  FooterBootomContainer,
  FooterTopContainer,
  FooterNavLinkWrapper,
} from './Footer.styled';

interface NavigationProps {
  onClick?: () => void;
}

export const Footer: React.FC<NavigationProps> = ({ onClick }) => {
  return (
    <FooterContainer>
      <Container>
        <FooterTopContainer>
          <FooterInfoContainer>
            <FooterLogoLink to="/">
              <svg>
                <use href={sprite + '#icon-logo'} />
              </svg>
            </FooterLogoLink>
            <FooterPhone href="tel:+380123456789">
              +380 (12) 345 6789
            </FooterPhone>
            <FooterEmail href="mailto:support@bookix.com">
              support@bookix.com
            </FooterEmail>
          </FooterInfoContainer>
          <FooterLinksContainer>
            <FooterNavContainer>
              <FooterInfoTitle>Quick Links</FooterInfoTitle>
              <FooterNavLinkWrapper>
                <FooterNavLink to="/" onClick={onClick}>
                  Home
                </FooterNavLink>
                <FooterNavLink to="/find" onClick={onClick}>
                  Find Books
                </FooterNavLink>
                <FooterNavLink to="/trades" onClick={onClick}>
                  Trade
                </FooterNavLink>
                <FooterNavLink to="/profile" onClick={onClick}>
                  Account
                </FooterNavLink>
              </FooterNavLinkWrapper>
            </FooterNavContainer>

            <FooterInputContainer>
              <FooterInfoTitle>Subscribe</FooterInfoTitle>
              <FooterInput placeholder="Get product updates" />
              <FooterInputButtonContainer>
                <FooterInputButton>
                  <svg>
                    <use href={sprite + '#icon-footer-arrow'} />
                  </svg>
                </FooterInputButton>
              </FooterInputButtonContainer>
            </FooterInputContainer>
          </FooterLinksContainer>
        </FooterTopContainer>
        <FooterBootomContainer>
          <FooterProduct>
            A product of
            <svg>
              <use href={sprite + '#icon-logo'} />
            </svg>
          </FooterProduct>
          <FooterProductSocList>
            <FooterProductSocItem>
              <FooterProductSocLink>
                <svg>
                  <use href={sprite + '#icon-Linkedin'} />
                </svg>
              </FooterProductSocLink>
            </FooterProductSocItem>
            <FooterProductSocItem>
              <FooterProductSocLink>
                <svg>
                  <use href={sprite + '#icon-facebook'} />
                </svg>
              </FooterProductSocLink>
            </FooterProductSocItem>
            <FooterProductSocItem>
              <FooterProductSocLink>
                <svg>
                  <use href={sprite + '#icon-Twitter'} />
                </svg>
              </FooterProductSocLink>
            </FooterProductSocItem>
          </FooterProductSocList>
          <FooterCopyright>© 2024 Bookix. All rights reserved</FooterCopyright>
        </FooterBootomContainer>
      </Container>
    </FooterContainer>
  );
};
