import classNames from 'classnames';
import styles from './styles.module.scss';

interface FlagProps {
  image: string;
  isSelected: boolean;
  onClick: () => void;
  title: string;
}

export const Flag: React.FC<FlagProps> = ({
  image,
  isSelected,
  onClick,
  title,
  ...props
}) => (
  <img
    alt="flag"
    src={image}
    className={classNames(
      styles['flag'],
      isSelected && styles['flag-selected'],
    )}
    title={title}
    onClick={onClick}
    {...props}
  />
);
