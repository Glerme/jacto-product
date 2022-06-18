import { useState } from 'react';

import { Product } from 'views/Product';
import { Description } from 'views/Description';
import { TechnicalSpecifications } from 'views/TechnicalSpecifications';
import { Gallery } from 'views/Gallery';

import { Header } from 'components/Header';

import './styles/global.scss';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Product />
      <Description />
      <TechnicalSpecifications />
      <Gallery />
    </>
  );
};
