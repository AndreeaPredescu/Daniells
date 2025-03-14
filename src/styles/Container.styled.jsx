import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 480px;
  position: relative;
  padding: 10px 30px;

  @media screen and (min-width: 480px) {
    max-width: 768px;
    padding: 10px 20px;
  }

  @media (min-width: 768px) {
    max-width: 1200px;
    padding: 10px 20px;
  }
`;
