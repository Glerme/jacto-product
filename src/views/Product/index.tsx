import image1 from 'assets/image1.png';
import { Badge } from 'components/Badge';

import styles from './styles.module.scss';

export const Product: React.FC = () => {
  return (
    <main className={styles['landing-page-container']}>
      <section className={styles['product-container-img']}>
        <img src={image1} alt="" />
      </section>

      <section className={styles['description-container']}>
        <div className={styles['title-container']}>
          <Badge>MAIS VENDIDOS</Badge>

          <h1>Jacto PJH</h1>

          <div>
            <p>
              Pulverizadores | <span>Jacto PJH</span>
            </p>
          </div>
        </div>

        <article>
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

        <section>
          <p>Manuais:</p>

          <div>
            <button>peças</button>
            <button>ficha</button>
            <button>manual</button>
          </div>
        </section>

        <section>
          <button>Solicitar Proposta</button>
          <button>COMPRAR AGORA</button>
        </section>
      </section>
    </main>
  );
};
