import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0px;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffb8ca;
  text-align: center;
  gap: 20px;
  height: 250px; /* Setăm o înălțime fixă pentru a asigura dimensiuni egale */
  animation: ${zoomIn} 0.7s forwards;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px; /* Limitează înălțimea imaginii */
  object-fit: contain; /* Menține proporțiile imaginii */
  cursor: pointer;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2em;
`;
