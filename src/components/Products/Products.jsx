import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ProductsWrapper,
  ProductItem,
  ProductImage,
  ProductTitle,
} from './Products.styled';
import productsData from '../../data/productsData'; // Acesta este fișierul în care sunt stocate datele produselor

const Products = ({ category }) => {
  const { type } = useParams();

  const filteredProducts = productsData.filter(product => {
    if (type) {
      return product.type === type;
    }
    return true;
  });

  const navigate = useNavigate();

  const handleProductClick = id => {
    navigate(`/product/${id}`);
  };

  return (
    <ProductsWrapper>
      {filteredProducts.map(product => (
        <ProductItem
          key={product.id}
          onClick={() => handleProductClick(product.id)}
        >
          <ProductImage src={product.image} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
        </ProductItem>
      ))}
    </ProductsWrapper>
  );
};

export default Products;
