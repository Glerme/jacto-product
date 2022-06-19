import image1 from 'assets/image1.png';

import { FiDollarSign, FiDownload, FiShoppingCart } from 'react-icons/fi';

import type { Product } from 'types/Product';

import { useLanguage } from 'hooks/useLanguage';

import { Badge } from 'components/Badge';
import { Title } from 'components/Title';
import { Button } from 'components/Button';
import { Translate } from 'components/Translate';
import { LinkButton } from 'components/LinkButton';

import styles from './styles.module.scss';

interface HomePageProps {
  product: Product;
}

export const HomePage: React.FC<HomePageProps> = ({ product }) => {
  const { language } = useLanguage();

  return (
    <div className={styles['landing-page-container']}>
      <section className={styles['product-container-img']}>
        <img src={image1} alt={product?.name[language]} />
      </section>

      <main className={'centralized-container'}>
        <section className={styles['description-container']}>
          <div className={styles['title-container']}>
            <Badge>
              <Translate path="Best Sellers" />
            </Badge>

            <Title color="primary">{product?.name[language]}</Title>

            <div>
              <p>
                <Translate path="Backpack Sprayer" /> |{' '}
                <span>{product?.name[language]}</span>
              </p>
            </div>
          </div>

          <article className={styles['description-article']}>
            <p>
              <Translate path="Description" />:
            </p>
            <div>
              <p
                className={styles['description-text']}
                dangerouslySetInnerHTML={{
                  __html: product?.description[language],
                }}
              ></p>
            </div>
          </article>

          <section className={styles['manuals-container']}>
            <p>
              <Translate path="Manuals" />:
            </p>

            <div>
              {product?.files?.map((file, i) => (
                <LinkButton
                  key={i}
                  background="primary50"
                  icon={() => <FiDownload size={24} />}
                  href={file?.file[language].url}
                  title={file?.name[language]}
                >
                  {file?.name[language]}
                </LinkButton>
              ))}
            </div>
          </section>

          <section className={styles['shopping-container']}>
            <Button
              background="primary50"
              icon={() => <FiDollarSign size={24} />}
            >
              <Translate path="Request Proposal" />
            </Button>
            <Button icon={() => <FiShoppingCart size={24} />}>
              <Translate path="Buy Now" />
            </Button>
          </section>
        </section>
      </main>
    </div>
  );
};
