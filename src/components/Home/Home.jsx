import React from 'react';
import {
  HomeContainer,
  MainContent,
  ImageWrapper,
  VideoWrapper,
  MottoSection,
  MottoSectionSpan,
} from './Home.styled';
import cakeImageMobile from '../../assets/images/cake-photo-m.png';
import cakeImageTablet from '../../assets/images/cake-photo-t.png';
import cakeImageDesktop from '../../assets/images/cake-photo-d.png';
import video from '../../assets/videos/video.mp4';

const Home = () => {
  return (
    <HomeContainer>
      <MainContent>
        <ImageWrapper>
          <picture>
            <source media="(min-width:768px)" srcSet={cakeImageDesktop} />
            <source media="(min-width:480px)" srcSet={cakeImageTablet} />
            <img src={cakeImageMobile} alt="cake" />
          </picture>
        </ImageWrapper>
        <MottoSection>
          <h1>
            Prăjituri făcute cu <MottoSectionSpan>dragoste</MottoSectionSpan>
          </h1>
        </MottoSection>
      </MainContent>
      <VideoWrapper>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
    </HomeContainer>
  );
};

export default Home;
