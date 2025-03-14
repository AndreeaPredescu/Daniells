import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const ProductTitle = styled.h1`
  margin: 0 0 10px;
  color: #ff3383;
`;

export const ProductDescription = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
`;

export const Highlight = styled.span`
  color: #ff3383;
  font-weight: bold;
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
    color: #ff3383;
  }
`;
