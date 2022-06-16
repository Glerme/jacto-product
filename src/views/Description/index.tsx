import styles from './styles.module.scss';

import card1 from 'assets/card1.png';
import card2 from 'assets/card2.png';
import card3 from 'assets/card3.png';

import { Title } from 'components/Title';
import classNames from 'classnames';

export const Description: React.FC = () => {
  return (
    <main
      className={classNames(
        styles['description-product-container'],
        'centralized-container',
      )}
    >
      <Title color="secondary">Informações sobre o produto</Title>

      <section className={styles['list-cards']}>
        <div className={styles['card-container']}>
          <div className={styles['card-content']}>
            <h4>Camara Metálica</h4>
            <p>Alta durabilidade e resistência.</p>
          </div>

          <div className={styles['img-container']}>
            <img src={card1} alt="" />
          </div>
        </div>

        <div className={styles['card-container']}>
          <div className={styles['card-content']}>
            <h4>BOCAL DE ABASTECIMENTO</h4>
            <p>
              Com 140 mm de diâmetro, possibilita um abastecimento rápido e sem
              desperdício.
            </p>
          </div>

          <div className={styles['img-container']}>
            <img src={card2} alt="" />
          </div>
        </div>

        <div className={styles['card-container']}>
          <div className={styles['card-content']}>
            <h4>BASE METÁLICA COM PINTURA ANTICORROSIVA</h4>
            <p>Material de alta resistência a quedas e riscos</p>
          </div>

          <div className={styles['img-container']}>
            <img src={card3} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};
