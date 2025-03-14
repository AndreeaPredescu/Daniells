import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const FillingsContainer = styled.div`
  padding: 20px 0;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px;
    margin-top: 0;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #555;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 35px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #555;
  transition: box-shadow 0.3s ease;

  &::placeholder {
    color: #555;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

// Mesaj introductiv
export const IntroMessage = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

// Atenționare alergeni
export const AlergenWarning = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
`;

// Card pentru fiecare compoziție
export const FillingCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

// Numele compoziției
export const FillingName = styled.h2`
  margin: 0;
  color: #ff3383;
`;

// Lista ingredientelor
export const FillingIngredients = styled.p`
  margin: 5px 0;
  color: #555;
`;

// Detalii suplimentare ale compoziției
export const FillingDetails = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;
  color: #555;
`;
