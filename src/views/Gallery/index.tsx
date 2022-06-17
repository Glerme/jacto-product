import card1 from 'assets/card1.png';
import card2 from 'assets/card2.png';
import card3 from 'assets/card3.png';

import { Title } from 'components/Title';
import { Carousel } from 'components/CarouselSlide';

import styles from './styles.module.scss';

export const Gallery: React.FC = () => {
  return (
    <main className={'centralized-container'}>
      <Title color="secondary">Galeria</Title>

      <section className={styles['gallery-container']}>
        <div className={styles['video-container']}>
          <iframe
            className={styles['video-content']}
            src="https://www.youtube.com/embed/YUlealKW90I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className={styles['carousel-container']}>
          <Carousel>
            <div className={styles['carousel-slide']}>
              <img src={card1} />
            </div>
            <div className={styles['carousel-slide']}>
              <img src={card2} />
            </div>
            <div className={styles['carousel-slide']}>
              <img src={card3} />
            </div>
          </Carousel>
        </div>
      </section>
    </main>
  );
};
