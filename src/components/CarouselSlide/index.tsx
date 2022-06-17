import styles from './styles.module.scss';

import card1 from 'assets/card1.png';
import card2 from 'assets/card2.png';
import card3 from 'assets/card3.png';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

export const CarouselSlide: React.FC = () => {
  return (
    <div className={styles['carousel-slide-container']}>
      <Carousel
        infiniteLoop
        dynamicHeight
        statusFormatter={(current, total) => `Slide: ${current} de ${total}`}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className={styles['arrow-styles']}
              style={{ left: 15 }}
            >
              <BiLeftArrow size={24} color={'#fcfcfc'} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className={styles['arrow-styles']}
              style={{ right: 15 }}
            >
              <BiRightArrow size={24} color={'#fcfcfc'} />
            </button>
          )
        }
      >
        <div>
          <img src={card1} />
        </div>
        <div>
          <img src={card2} />
        </div>
        <div>
          <img src={card3} />
        </div>
      </Carousel>
    </div>
  );
};
