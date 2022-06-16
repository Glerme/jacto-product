import './styles/global.scss';

import { Product } from 'views/Product';
import { Description } from 'views/Description';
import { TechnicalSpecifications } from 'views/TechnicalSpecifications';

export const App: React.FC = () => {
  return (
    <>
      <Product />
      <Description />
      <TechnicalSpecifications />
    </>
  );
};
