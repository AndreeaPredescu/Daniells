import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 20px 0px;
  text-align: center;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterColumn = styled.div`
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

export const SocialIcons = styled.div`
  margin-bottom: 20px;

  a {
    margin: 0 15px;
  }
`;

export const FooterCopy = styled.p`
  font-size: 14px;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const AnpcLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    align-items: flex-start;
  }

  img {
    width: 150px;
    margin: 5px 0;
  }
`;

export const Phone = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
