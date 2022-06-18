import styles from './styles.module.scss';

// import { Carousel } from 'react-responsive-carousel';

import Slider from 'react-slick';

import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { NextArrow, PrevArrow } from './Arrows';

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const responsive = {
    responsive: [
      {
        breakpoint: 425,
        settings: {
          arrows: true,
          dots: false,
          rows: 3,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 1080,
        settings: {
          arrows: true,
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles['carousel-slide-container']}>
      <Slider
        autoplay={true}
        pauseOnHover={true}
        infinite={true}
        speed={800}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        {...responsive}
      >
        {children}
      </Slider>
    </div>
  );
};
