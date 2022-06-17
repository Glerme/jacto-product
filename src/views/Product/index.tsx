import image1 from 'assets/image1.png';

import { FiDollarSign, FiDownload, FiShoppingCart } from 'react-icons/fi';

import { Badge } from 'components/Badge';
import { Button } from 'components/Button';
import { Title } from 'components/Title';

import styles from './styles.module.scss';

export const Product: React.FC = () => {
  return (
    <div className={styles['landing-page-container']}>
      <section className={styles['product-container-img']}>
        <img src={image1} alt="" />
      </section>

      <main className={'centralized-container'}>
        <section className={styles['description-container']}>
          <div className={styles['title-container']}>
            <Badge>MAIS VENDIDOS</Badge>

            <Title color="primary">Jacto PJH</Title>

            <div>
              <p>
                Pulverizadores | <span>Jacto PJH</span>
              </p>
            </div>
          </div>

          <article className={styles['description-article']}>
            <p>Descrição: </p>
            <ul>
              <li>
                O pulverizador mais vendido do mundo, testado e aprovado em mais
                de 100 países.
              </li>
              <li>
                Produzido com câmara de metal de alta durabilidade, bocal de 140
                mm facilitando o abastecimento e tanque de 20 litros é ideal
                para todos os tipos de aplicações.
              </li>
            </ul>
          </article>

          <section className={styles['manuals-container']}>
            <p>Manuais:</p>

            <div>
              <Button
                background="primary50"
                icon={() => <FiDownload size={24} />}
              >
                Manual do operador
              </Button>
              <Button
                background="primary50"
                icon={() => <FiDownload size={24} />}
              >
                Ficha Técnica
              </Button>
              <Button
                background="primary50"
                icon={() => <FiDownload size={24} />}
              >
                Lista de Peças
              </Button>
            </div>
          </section>

          <section className={styles['shopping-container']}>
            <Button
              background="primary50"
              icon={() => <FiDollarSign size={24} />}
            >
              Solicitar Proposta
            </Button>
            <Button icon={() => <FiShoppingCart size={24} />}>
              COMPRAR AGORA
            </Button>
          </section>
        </section>
      </main>
    </div>
  );
};
