import type { Product } from 'types/Product';

import { useLanguage } from 'hooks/useLanguage';

import { Title } from 'components/Title';
import { TabList } from 'components/TabList';
import { Translate } from 'components/Translate';

import styles from './styles.module.scss';

interface TechnicalSpecificationsProps {
  product: Product;
}

export const TechnicalSpecifications: React.FC<
  TechnicalSpecificationsProps
> = ({ product }) => {
  const { language } = useLanguage();

  const parsedProduct = {
    dimensions: product?.specifications.find(
      prod => prod?.title.pt_BR === 'DIMENSÕES / PESO',
    ),
    tank: product?.specifications.find(prod => prod?.title.pt_BR === 'TANQUE'),
    bomb: product?.specifications.find(prod => prod?.title.pt_BR === 'BOMBA'),
  };

  return (
    <main className={'centralized-container'}>
      <Title color="secondary">
        <Translate path="Technical Specifications" />
      </Title>

      <section className={styles['specifications-container-tabs']}>
        <TabList
          labelTabs={[
            parsedProduct?.dimensions?.title[language] || 'a',
            parsedProduct?.bomb?.title[language] || 'b',
            parsedProduct?.tank?.title[language] || 'c',
          ]}
        >
          <div className={styles['tab-content']}>
            {parsedProduct?.dimensions?.items.map((item, i) => (
              <div className={styles['tab-row']} key={i}>
                <p>{item?.title[language]}</p>
                <p>{item?.description[language]}</p>
              </div>
            ))}
          </div>

          <div className={styles['tab-content']}>
            {parsedProduct?.bomb?.items.map((item, i) => (
              <div className={styles['tab-row']} key={i}>
                <p>{item?.title[language]}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item?.description[language],
                  }}
                ></p>
              </div>
            ))}
          </div>

          <div className={styles['tab-content']}>
            {parsedProduct?.tank?.items.map((item, i) => (
              <div className={styles['tab-row']} key={i}>
                <p>{item?.title[language]}</p>
                <p>{item?.description[language]}</p>
              </div>
            ))}
          </div>
        </TabList>
      </section>
    </main>
  );
};
