import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
import {
  ProductDetailsWrapper,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  Highlight,
  StyledLink,
} from './ProductDetails.styled';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find(product => product.id === parseInt(id));

  if (!product) {
    return <p>Produsul nu a fost găsit!</p>;
  }

  return (
    <ProductDetailsWrapper>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>
          Alege compoziția preferată pentru tortul tău!
          <br />
          <br />
          La cofetăria noastră, ne dorim ca fiecare tort să fie la fel de unic
          ca și tine. De aceea, îți oferim posibilitatea de a-ți personaliza
          tortul, alegând compoziția preferată din selecția noastră de rețete
          delicioase. Explorează{' '}
          <StyledLink to={`/fillings/cakes`}>
            pagina noastră de compoziții
          </StyledLink>{' '}
          și combină ingredientele care te inspiră cel mai mult. Fie că preferi
          un gust clasic sau vrei să încerci ceva nou și surprinzător, suntem
          aici să transformăm fiecare ocazie într-un moment{' '}
          <Highlight>dulce de neuitat</Highlight>!
        </ProductDescription>
      </ProductInfo>
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
