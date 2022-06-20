import styles from './styles.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles['footer-container']}>
      <p>Feito por </p>
      <a href="https://glerme.dev" target="_blank" rel="noreferrer">
        Guilherme Felipe
      </a>
    </div>
  );
};
