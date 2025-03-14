import styled from 'styled-components';

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutUsContent = styled.div`
  flex: 1;
  padding: 10px;

  @media (min-width: 768px) {
    padding-right: 20px;
  }

  p {
    line-height: 1.6;
    margin: 10px 0;

    &:first-of-type::first-letter {
      font-size: 2em;
      font-weight: bold;
      float: left;
      margin-right: 5px;
    }

    &:first-of-type {
      text-indent: 20px;
    }
  }
`;

export const AboutUsTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  color: #ff3383;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const AboutUsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;

  @media (min-width: 768px) {
    flex: 1;
    max-width: 50%;
  }
`;
