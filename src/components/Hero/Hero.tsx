import React from 'react';
import {
  HeroBtn,
  HeroContainer,
  HeroTitle,
  ImageWithOverlay,
} from './Hero.styled';
import { Container } from 'components/Container/Container';
import imageHero from 'img/hero-mob.jpg';
import imageHeroTablet from 'img/hero-tab.jpg';
import imageHeroDesktop from 'img/hero-desc.jpg';
import { useMediaQuery } from 'react-responsive';

export const Hero: React.FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });

  let imageUrl = imageHeroDesktop;

  if (isTablet) {
    imageUrl = imageHeroTablet;
  } else if (isMobile) {
    imageUrl = imageHero;
  }
  return (
    <HeroContainer>
      <Container>
        <ImageWithOverlay>
          <img src={imageUrl} alt="Hero" />
          <HeroTitle>Exchange books with other readers in your city</HeroTitle>
          <HeroBtn>Find Books</HeroBtn>
        </ImageWithOverlay>
      </Container>
    </HeroContainer>
  );
};
