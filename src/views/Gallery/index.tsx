import { CarouselSlide } from 'components/CarouselSlide';
import { Title } from 'components/Title';

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
          <CarouselSlide />
        </div>
      </section>
    </main>
  );
};
