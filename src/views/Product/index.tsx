import image1 from 'assets/image1.png';

import { FiDollarSign, FiDownload, FiShoppingCart } from 'react-icons/fi';

import { Badge } from 'components/Badge';
import { Button } from 'components/Button';
import { Title } from 'components/Title';

import styles from './styles.module.scss';
import classNames from 'classnames';

export const Product: React.FC = () => {
  return (
    <main
      className={classNames(
        styles['landing-page-container'],
        'centralized-container',
      )}
    >
      <section className={styles['product-container-img']}>
        <img src={image1} alt="" />
      </section>

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
              mm facilitando o abastecimento e tanque de 20 litros é ideal para
              todos os tipos de aplicações.
            </li>
          </ul>
        </article>

        <section className={styles['manuals-container']}>
          <p>Manuais:</p>

          <div>
            <Button
              background="secondary"
              icon={() => <FiDownload size={24} />}
              isOutlined
            >
              Manual do operador
            </Button>
            <Button icon={() => <FiDownload size={24} />}>Ficha Técnica</Button>
            <Button icon={() => <FiDownload size={24} />}>
              Lista de Peças
            </Button>
          </div>
        </section>

        <section className={styles['shopping-container']}>
          <Button icon={() => <FiDollarSign size={24} />}>
            Solicitar Proposta
          </Button>
          <Button icon={() => <FiShoppingCart size={24} />}>
            COMPRAR AGORA
          </Button>
        </section>
      </section>
    </main>
  );
};
