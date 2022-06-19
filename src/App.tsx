import { useState } from 'react';

import type { Product } from 'types/Product';

import { HomePage } from 'views/HomePage';
import { Description } from 'views/Description';
import { TechnicalSpecifications } from 'views/TechnicalSpecifications';
import { Gallery } from 'views/Gallery';

import { Header } from 'components/Header';

import './styles/global.scss';
import { useFetch } from 'hooks/useFetch';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: product, loading } = useFetch<Product>('/product');

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <HomePage product={product} />
      <Description product={product} />
      <TechnicalSpecifications product={product} />
      <Gallery product={product} />
    </>
  );
};
