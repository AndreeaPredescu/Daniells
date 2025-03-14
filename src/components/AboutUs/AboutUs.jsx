import React from 'react';
import {
  AboutUsWrapper,
  AboutUsContent,
  AboutUsImage,
  AboutUsTitle,
} from './AboutUs.styled';
import aboutImage from '../../assets/images/about-us-image.webp';

const AboutUs = () => {
  return (
    <>
      <AboutUsTitle>Povestea noastră</AboutUsTitle>
      <AboutUsWrapper>
        <AboutUsContent>
          <p>
            Marea mea pasiune pentru prăjituri m-a inspirat să împărtășesc
            această bucurie cu toată lumea. Astfel, în 2009, am decis să deschid
            ușile unei afaceri de familie, dedicată creării unor delicii dulci
            care încântă simțurile și aduc zâmbete pe fețele clienților noștri.
          </p>
          <p>
            Încă de la început, am crezut cu tărie în succesul prăjiturilor
            mele, dar realitatea a depășit toate așteptările. Feedback-ul
            pozitiv și aprecierea primită ne-au motivat să continuăm să inovăm
            și să oferim produse care să răspundă celor mai înalte standarde.
          </p>
          <p>
            Suntem o afacere de familie, pentru că aici se regăsește dragostea
            adevărată. Aceasta se reflectă în fiecare detaliu al muncii noastre:
            de la selectarea atentă a ingredientelor de cea mai bună calitate,
            până la grija și pasiunea cu care preparăm fiecare prăjitură. Credem
            cu tărie că lucrul bine făcut este cheia succesului și ne mândrim cu
            meseria noastră.
          </p>
          <p>
            Cu fiecare prăjitură creată, ne dorim să aducem un strop de fericire
            în viețile celor care ne aleg. Vă mulțumim că faceți parte din
            povestea noastră dulce și că ne permiteți să vă încântăm cu
            gusturile divine pe care le creăm cu atâta dragoste.
          </p>
        </AboutUsContent>
        <AboutUsImage src={aboutImage} alt="Cofetăria noastră" />
      </AboutUsWrapper>
    </>
  );
};

export default AboutUs;
