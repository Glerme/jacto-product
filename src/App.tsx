import './styles/global.scss';

import { Product } from 'views/Product';
import { Description } from 'views/Description';
import { TechnicalSpecifications } from 'views/TechnicalSpecifications';
import { Gallery } from 'views/Gallery';

export const App: React.FC = () => {
  return (
    <>
      <Product />
      <Description />
      <TechnicalSpecifications />
      <Gallery />
    </>
  );
};
