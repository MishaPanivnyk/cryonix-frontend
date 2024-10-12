import { Swiper as SwiperType } from 'swiper';
import { NavigationOptions } from 'swiper/types';
import { Container } from 'components/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import {
  PopularBooksContainer,
  PopularBooksSwiperItem,
  PopularBooksTitle,
  CustomPrevButton,
  CustomNextButton,
  PopularBooksSwiperContainer,
  PopularBooksBtn,
} from './PopularBooks.styled';

export const PopularBooks: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <PopularBooksContainer>
      <Container>
        <PopularBooksTitle>Popular Books</PopularBooksTitle>
        <PopularBooksSwiperContainer>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper: SwiperType) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== 'boolean'
              ) {
                const navigationParams = swiper.params
                  .navigation as NavigationOptions;
                navigationParams.prevEl = prevRef.current;
                navigationParams.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <PopularBooksSwiperItem></PopularBooksSwiperItem>
            </SwiperSlide>
            <SwiperSlide>
              <PopularBooksSwiperItem></PopularBooksSwiperItem>
            </SwiperSlide>
            <SwiperSlide>
              <PopularBooksSwiperItem></PopularBooksSwiperItem>
            </SwiperSlide>
          </Swiper>

          <CustomPrevButton ref={prevRef} className="custom-prev-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
            >
              <path
                d="M0.146446 4.14645C-0.0488157 4.34171 -0.0488157 4.65829 0.146446 4.85355L3.32843 8.03553C3.52369 8.2308 3.84027 8.2308 4.03553 8.03553C4.2308 7.84027 4.2308 7.52369 4.03553 7.32843L1.20711 4.5L4.03553 1.67157C4.2308 1.47631 4.2308 1.15973 4.03553 0.964466C3.84027 0.769204 3.52369 0.769204 3.32843 0.964466L0.146446 4.14645ZM10.5 4L0.5 4V5L10.5 5V4Z"
                fill="#222222"
              />
            </svg>
          </CustomPrevButton>
          <CustomNextButton ref={nextRef} className="custom-next-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
            >
              <path
                d="M10.8536 4.14645C11.0488 4.34171 11.0488 4.65829 10.8536 4.85355L7.67157 8.03553C7.47631 8.2308 7.15973 8.2308 6.96447 8.03553C6.7692 7.84027 6.7692 7.52369 6.96447 7.32843L9.79289 4.5L6.96447 1.67157C6.7692 1.47631 6.7692 1.15973 6.96447 0.964466C7.15973 0.769204 7.47631 0.769204 7.67157 0.964466L10.8536 4.14645ZM0.5 4L10.5 4V5L0.5 5L0.5 4Z"
                fill="#222222"
              />
            </svg>
          </CustomNextButton>
        </PopularBooksSwiperContainer>
        <PopularBooksBtn to="/find">Find Books</PopularBooksBtn>
      </Container>
    </PopularBooksContainer>
  );
};
