import type { Product } from 'types/Product';
import { useLanguage } from 'hooks/useLanguage';

import { Title } from 'components/Title';
import { Translate } from 'components/Translate';
import { Carousel } from 'components/CarouselSlide';

import styles from './styles.module.scss';

interface GalleryProps {
  product: Product;
}

export const Gallery: React.FC<GalleryProps> = ({ product }) => {
  const { language } = useLanguage();

  return (
    <main className={'centralized-container'}>
      <Title color="secondary">
        <Translate path="Gallery" />
      </Title>

      <section className={styles['gallery-container']}>
        <div className={styles['video-container']}>
          <iframe
            className={styles['video-content']}
            src={'https://www.youtube.com/embed/YUlealKW90I'}
            title={product?.name[language]}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className={styles['carousel-container']}>
          <Carousel>
            {product?.gallery?.map((image, i) => (
              <div className={styles['carousel-slide']} key={i}>
                <img src={image?.url} alt={'Carrosel'} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </main>
  );
};
