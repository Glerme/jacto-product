import { useEffect } from 'react';

import './styles/global.scss';

import { Product } from 'views/Product';
import { Description } from 'views/Description';
import { TechnicalSpecifications } from 'views/TechnicalSpecifications';
import { Gallery } from 'views/Gallery';

import { useFetch } from 'hooks/useFetch';
import { Translate } from 'components/Translate';
import { I18n } from 'components/I18n';

export const App: React.FC = () => {
  // const query = useFetch('http://jacto.com/api/v1/products/132', {
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': '*',
  //   },
  // });

  // console.log(query);?

  return (
    <>
      <div>
        <I18n />
        <p>
          <Translate path="Welcome to React" />
        </p>
      </div>
      <Product />
      <Description />
      <TechnicalSpecifications />
      <Gallery />
    </>
  );
};
