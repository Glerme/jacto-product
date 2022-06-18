interface FlagProps {
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

export const Flag: React.FC<FlagProps> = ({
  image,
  isSelected,
  onClick,
  ...props
}) => (
  <img
    alt="flag"
    src={image}
    className={isSelected ? 'flag selected' : 'flag'}
    onClick={onClick}
    {...props}
  />
);
