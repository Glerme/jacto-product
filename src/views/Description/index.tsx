import classNames from 'classnames';

import type { Product } from 'types/Product';

import { useLanguage } from 'hooks/useLanguage';

import { Title } from 'components/Title';
import { Translate } from 'components/Translate';

import styles from './styles.module.scss';

interface DescriptionProps {
  product: Product;
}

export const Description: React.FC<DescriptionProps> = ({ product }) => {
  const { language } = useLanguage();

  return (
    <main
      className={classNames(
        styles['description-product-container'],
        'centralized-container',
      )}
    >
      <Title color="secondary">
        <Translate path="Information About the Product" />
      </Title>

      <section className={styles['list-cards']}>
        {product?.features?.map((feature, i) => (
          <div className={styles['card-container']} key={i}>
            <div className={styles['card-content']}>
              <h4>{feature?.title[language]}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: feature?.description[language],
                }}
              ></p>
            </div>

            <div className={styles['img-container']}>
              <img
                src={feature?.image?.url}
                alt={feature?.title[language]}
                title={feature?.title[language]}
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
