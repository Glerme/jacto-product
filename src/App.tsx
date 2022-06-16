import './styles/global.scss';

import { Product } from 'views/Product';
import { Description } from 'views/Description';

export const App: React.FC = () => {
  return (
    <>
      <Product />
      <Description />
    </>
  );
};
