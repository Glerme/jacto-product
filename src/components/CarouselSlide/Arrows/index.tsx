import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { CustomArrowProps } from 'react-slick';

export const NextArrow = ({
  currentSlide,
  slideCount,
  className,
  style,
  ...props
}: CustomArrowProps) => (
  <BiRightArrow
    size={34}
    color={'white'}
    className={className}
    style={{
      ...style,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      zIndex: '5',
      marginRight: '1rem',
      background: '#003685',
      padding: '0.5rem',
      width: '2.5rem',
      height: '2.5rem',
    }}
    {...props}
  />
);

export const PrevArrow = ({
  currentSlide,
  slideCount,
  className,
  style,
  ...props
}: CustomArrowProps) => (
  <BiLeftArrow
    size={34}
    color={'white'}
    className={className}
    style={{
      ...style,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      zIndex: '5',
      marginLeft: '1rem',
      background: '#003685',
      padding: '0.5rem',
      width: '2.5rem',
      height: '2.5rem',
    }}
    {...props}
  />
);
