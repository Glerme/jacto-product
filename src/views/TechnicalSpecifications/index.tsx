import { Title } from 'components/Title';
import { TabList } from 'components/TabList';

import styles from './styles.module.scss';

export const TechnicalSpecifications: React.FC = () => {
  return (
    <main className={'centralized-container'}>
      <Title color="secondary">Especificações Técnicas</Title>

      <section className={styles['specifications-container-tabs']}>
        <TabList labelTabs={['Dimensões/Peso', 'Tanque', 'Bomba']}>
          <div className={styles['tab-content']}>
            <div className={styles['tab-row']}>
              <p>Comprimento</p>
              <p>395mm</p>
            </div>

            <div className={styles['tab-row']}>
              <p>Comprimento</p>
              <p>395mm</p>
            </div>

            <div className={styles['tab-row']}>
              <p>Comprimento</p>
              <p>395mm</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </TabList>
      </section>
    </main>
  );
};
