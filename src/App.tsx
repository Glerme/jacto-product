import { useState } from 'react';

import type { Product } from 'types/Product';

import { HomePage } from 'views/HomePage';
import { Description } from 'views/Description';
import { TechnicalSpecifications } from 'views/TechnicalSpecifications';
import { Gallery } from 'views/Gallery';

import { useFetch } from 'hooks/useFetch';

import { Header } from 'components/Header';
import { Loading } from 'components/Loading';
import { ErrorComponent } from 'components/ErrorComponent';

import './styles/global.scss';
import { Footer } from 'components/Footer';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: product, loading, errors } = useFetch<Product>('/product');

  if (loading) {
    return <Loading />;
  }

  if (errors) {
    return <ErrorComponent />;
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
      <Footer />
    </>
  );
};
