import React, { useState } from 'react';
import {
  CandyBarContainer,
  ImageWrapper,
  NavButton,
  Image,
} from './CandyBar.styled';

import image1_candyBar from '../../assets/images/candybar/00001.webp';
import image2_candyBar from '../../assets/images/candybar/00002.webp';
import image3_candyBar from '../../assets/images/candybar/00003.webp';
import image4_candyBar from '../../assets/images/candybar/00004.webp';
import image5_candyBar from '../../assets/images/candybar/00005.webp';
import image6_candyBar from '../../assets/images/candybar/00006.webp';
import image7_candyBar from '../../assets/images/candybar/00007.webp';
import image8_candyBar from '../../assets/images/candybar/00008.webp';
import image9_candyBar from '../../assets/images/candybar/00009.webp';
import image10_candyBar from '../../assets/images/candybar/00010.webp';
import image11_candyBar from '../../assets/images/candybar/00011.webp';
import image12_candyBar from '../../assets/images/candybar/00012.webp';
import image13_candyBar from '../../assets/images/candybar/00013.webp';
import image14_candyBar from '../../assets/images/candybar/00014.webp';
import image15_candyBar from '../../assets/images/candybar/00015.webp';
import image16_candyBar from '../../assets/images/candybar/00016.webp';
import image17_candyBar from '../../assets/images/candybar/00017.webp';
import image18_candyBar from '../../assets/images/candybar/00018.webp';
import image19_candyBar from '../../assets/images/candybar/00019.webp';
import image20_candyBar from '../../assets/images/candybar/00020.webp';
import image21_candyBar from '../../assets/images/candybar/00021.webp';
import image22_candyBar from '../../assets/images/candybar/00022.webp';
import image23_candyBar from '../../assets/images/candybar/00023.webp';
import image24_candyBar from '../../assets/images/candybar/00024.webp';
import image25_candyBar from '../../assets/images/candybar/00025.webp';
import image26_candyBar from '../../assets/images/candybar/00026.webp';
import image27_candyBar from '../../assets/images/candybar/00027.webp';
import image28_candyBar from '../../assets/images/candybar/00028.webp';
import image29_candyBar from '../../assets/images/candybar/00029.webp';
import image30_candyBar from '../../assets/images/candybar/00030.webp';
import image31_candyBar from '../../assets/images/candybar/00031.webp';
import image32_candyBar from '../../assets/images/candybar/00032.webp';
import image33_candyBar from '../../assets/images/candybar/00033.webp';
import image34_candyBar from '../../assets/images/candybar/00034.webp';
import image35_candyBar from '../../assets/images/candybar/00035.webp';
import image36_candyBar from '../../assets/images/candybar/00036.webp';
import image37_candyBar from '../../assets/images/candybar/00037.webp';
import image38_candyBar from '../../assets/images/candybar/00038.webp';
import image39_candyBar from '../../assets/images/candybar/00039.webp';
import image40_candyBar from '../../assets/images/candybar/00040.webp';
import image41_candyBar from '../../assets/images/candybar/00041.webp';
import image42_candyBar from '../../assets/images/candybar/00042.webp';
import image43_candyBar from '../../assets/images/candybar/00043.webp';
import image44_candyBar from '../../assets/images/candybar/00044.webp';
import image45_candyBar from '../../assets/images/candybar/00045.webp';
import image46_candyBar from '../../assets/images/candybar/00046.webp';
import image47_candyBar from '../../assets/images/candybar/00047.webp';
import image48_candyBar from '../../assets/images/candybar/00048.webp';
import image49_candyBar from '../../assets/images/candybar/00049.webp';
import image50_candyBar from '../../assets/images/candybar/00050.webp';

const images = [
  image1_candyBar,
  image2_candyBar,
  image3_candyBar,
  image4_candyBar,
  image5_candyBar,
  image6_candyBar,
  image7_candyBar,
  image8_candyBar,
  image9_candyBar,
  image10_candyBar,
  image11_candyBar,
  image12_candyBar,
  image13_candyBar,
  image14_candyBar,
  image15_candyBar,
  image16_candyBar,
  image17_candyBar,
  image18_candyBar,
  image19_candyBar,
  image20_candyBar,
  image21_candyBar,
  image22_candyBar,
  image23_candyBar,
  image24_candyBar,
  image25_candyBar,
  image26_candyBar,
  image27_candyBar,
  image28_candyBar,
  image29_candyBar,
  image30_candyBar,
  image31_candyBar,
  image32_candyBar,
  image33_candyBar,
  image34_candyBar,
  image35_candyBar,
  image36_candyBar,
  image37_candyBar,
  image38_candyBar,
  image39_candyBar,
  image40_candyBar,
  image41_candyBar,
  image42_candyBar,
  image43_candyBar,
  image44_candyBar,
  image45_candyBar,
  image46_candyBar,
  image47_candyBar,
  image48_candyBar,
  image49_candyBar,
  image50_candyBar,
];

const CandyBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <CandyBarContainer>
      <NavButton onClick={handlePrev}>&lt;</NavButton>
      <ImageWrapper>
        <Image
          src={images[currentIndex]}
          alt={`Candy Bar ${currentIndex + 1}`}
        />
      </ImageWrapper>
      <NavButton onClick={handleNext}>&gt;</NavButton>
    </CandyBarContainer>
  );
};

export default CandyBar;
