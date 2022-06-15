import styles from './styles.module.scss';

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <div className={styles['badge-container']}>{children}</div>;
};
