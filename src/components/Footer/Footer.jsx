import React from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TikTokIcon } from '../../assets/icons/tiktok.svg';
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  SocialIcons,
  AnpcLinks,
  HorizontalLine,
  FooterCopy,
  Phone,
} from './Footer.styled';
import anpcImage1 from '../../assets/images/ANPC_image1.webp';
import anpcImage2 from '../../assets/images/ANPC_image2.webp';

const Footer = () => {
  return (
    <FooterContainer>
      <HorizontalLine />
      <FooterContent>
        <FooterColumn>
          <SocialIcons>
            <a href="https://www.facebook.com/profile.php?id=61561041358748">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/cofetaria.daniells/">
              <InstagramIcon />
            </a>
            <a href="https://www.tiktok.com/@cofetaria.daniells/">
              <TikTokIcon />
            </a>
          </SocialIcons>
          <FooterCopy>&copy; Daniell's. Toate drepturile rezervate.</FooterCopy>
        </FooterColumn>
        <FooterColumn>
          <h3>Laborator</h3>
          <p>Str. Progresul, nr. 22, Băilești, jud. Dolj</p>
          <Phone href="tel:+40251313730">Telefon: 0251.313.730</Phone>
        </FooterColumn>
        <FooterColumn>
          <h3>Cofetărie</h3>
          <p>Str. Victoriei, nr. 101 B, Băilești, jud. Dolj</p>
          <Phone href="tel:+40351170216">Telefon: 0351.170.216</Phone>
        </FooterColumn>
        <FooterColumn>
          <AnpcLinks>
            <a href="https://anpc.ro/ce-este-sal/">
              <img src={anpcImage1} alt="ANPC 1" />
            </a>
            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
              <img src={anpcImage2} alt="ANPC 2" />
            </a>
          </AnpcLinks>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
