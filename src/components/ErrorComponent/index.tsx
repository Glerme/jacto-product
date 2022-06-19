import errorImg from 'assets/error-img.svg';

import { Translate } from 'components/Translate';

import styles from './styles.module.scss';

export const ErrorComponent: React.FC = () => {
  return (
    <div className={styles['error-container']}>
      <img src={errorImg} alt="Error 404" />
      <h1>
        <Translate path="Error" />
      </h1>
    </div>
  );
};
