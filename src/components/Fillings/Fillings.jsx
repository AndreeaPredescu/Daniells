import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  FillingsContainer,
  IntroMessage,
  AlergenWarning,
  FillingCard,
  FillingName,
  FillingIngredients,
  FillingDetails,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from './Fillings.styled';
import { fillings, removeDiacritics } from '../../data/fillings';

const Fillings = () => {
  const { type } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);
  const [displayedFillings, setDisplayedFillings] = useState([]);
  const [selectedFilling, setSelectedFilling] = useState(null);
  const isFetching = useRef(false);

  useEffect(() => {
    setVisibleCount(10);
  }, [type]);

  useEffect(() => {
    const typeFilteredFillings = fillings.filter(filling =>
      type ? filling.type === type : true
    );
    const filtered = typeFilteredFillings.filter(
      comp =>
        removeDiacritics(comp.name.toLowerCase()).includes(
          removeDiacritics(searchTerm.toLowerCase())
        ) ||
        comp.ingredients.some(ingredient =>
          removeDiacritics(ingredient.toLowerCase()).includes(
            removeDiacritics(searchTerm.toLowerCase())
          )
        )
    );
    setDisplayedFillings(filtered.slice(0, visibleCount));
  }, [searchTerm, visibleCount, type]);

  const handleScroll = () => {
    if (isFetching.current) return;
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      isFetching.current = true;
      setTimeout(() => {
        setVisibleCount(prevCount => prevCount + 10);
        isFetching.current = false;
      }, 300);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setVisibleCount(10);
  };

  const handleClick = comp => {
    setSelectedFilling(prev => (prev?.id === comp.id ? null : comp));
  };

  return (
    <FillingsContainer>
      <IntroMessage>
        Alegeți compoziția preferată pentru torturile dvs. din lista de mai jos.
      </IntroMessage>
      <AlergenWarning>
        Atenție! Produsele noastre pot conține următoarele tipuri de alergeni:
        gluten, ouă, lactoză, lecitină din soia, fructe cu coajă, arahide,
        lapte, grăsimi vegetale, stabilizatori (E460, E466, E340), regulator de
        aciditate (E501), emulsifianți (E427b, E222), coloranți (E1600, E133),
        lecitină (E322), ester (E472), acid citric (E330), citrogliceride
        (E472c), aditiv alimentar pectina (E440).
      </AlergenWarning>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Caută după nume sau ingrediente..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchContainer>
      {displayedFillings.map(comp => (
        <FillingCard key={comp.id} onClick={() => handleClick(comp)}>
          <FillingName>{comp.name}</FillingName>
          <FillingIngredients>
            <strong>Ingrediente: </strong>
            {comp.ingredients.join(', ')}
          </FillingIngredients>
          {selectedFilling?.id === comp.id && (
            <FillingDetails>
              <p>
                <strong>Valori nutriționale medii pentru 100 g: </strong>{' '}
                {comp.nutritionValues}
              </p>
              <p>
                <strong>Atenționări: </strong> {comp.warnings}
              </p>
              <p>
                <strong>Condiții de depozitare: </strong>{' '}
                {comp.storageConditions}
              </p>
            </FillingDetails>
          )}
        </FillingCard>
      ))}
    </FillingsContainer>
  );
};

export default Fillings;
