import { Title } from 'components/Title';
import { TabList } from 'components/TabList';

import styles from './styles.module.scss';

export const TechnicalSpecifications: React.FC = () => {
  return (
    <main className={'centralized-container'}>
      <Title color="secondary">Especificações Técnicas</Title>

      <section className={styles['specifications-container-tabs']}>
        <TabList labelTabs={['Dimensões/Peso', 'Tanque', 'Bomba']}>
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </TabList>
      </section>
    </main>
  );
};
