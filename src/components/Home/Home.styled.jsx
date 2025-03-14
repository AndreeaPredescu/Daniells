import styled, { keyframes } from 'styled-components';
import heartImageDesktop from '../../assets/images/heart-photo-d.png';

const slideInFromRight = keyframes`
  from {
    transform: translateX(200%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInFromBottom = keyframes`
  from {
    transform: translateY(200%);
  }
  to {
    transform: translateY(0);
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  width: 100%;
  background-image: url(${heartImageDesktop});
  background-repeat: no-repeat;
  background-position: 630px 53px;
  padding: 0px;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 50vh; /* 50% din înălțimea viewport-ului pentru mobile */

  @media (min-width: 768px) {
    height: 100vh; /* 100% din înălțimea viewport-ului pentru tablete și desktop */
  }
`;

export const MottoSection = styled.section`
  flex: 1;
  font-size: 12px;
  color: #fff;

  animation: 1s ease-out 0s 1 ${slideInFromRight};
  text-align: right;
  text-transform: uppercase;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const MottoSectionSpan = styled.span`
  color: #ff3383;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  img {
    animation: 3s ease-out 0s 1 ${slideInFromBottom};
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 50vh; /* 50% din înălțimea viewport-ului pentru mobile */
  margin: 20px 0;
  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 100vh; /* 100% din înălțimea viewport-ului pentru tablete și desktop */
  }

  video {
    width: 100%;
    border-radius: 15px;
  }
`;
