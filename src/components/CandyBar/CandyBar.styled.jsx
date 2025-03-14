import styled from 'styled-components';

export const CandyBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Set the height to full viewport height */
  width: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Ensures the image wrapper takes the full height */
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%; /* Ensures the image fills the wrapper vertically */
  width: 100%; /* Ensures the image fills the wrapper horizontally */
  object-fit: cover; /* Ensures the image maintains its aspect ratio while filling the wrapper */
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;
