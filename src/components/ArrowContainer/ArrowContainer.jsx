import { useState } from 'react';
import { WORDS } from '../../constants';
import arrowRight from '/images/arrow-right.svg';
import arrowLeft from '/images/arrow-left.svg';
import {
    StyledArrowContainer, StyledArrowPrevButton, 
    StyledArrowNextButton, StyledImgArrowButton
} from './styleArrowContainer';


export const ArrowContainer = () => {
  
  const [indexCurrent, setIndexCurrent] = useState(0);
  const handleCheckNextIndexCard = () => {
    indexCurrent + 1 <= WORDS.length - 1 
    ? setIndexCurrent(indexCurrent + 1) 
    : setIndexCurrent(0)
  }
  
  return(
    <StyledArrowContainer>
      <StyledArrowPrevButton onClick={handleCheckPrevIndexCard}>
        <StyledImgArrowButton src={arrowLeft} alt="arrowLeft" />
      </StyledArrowPrevButton>
      <StyledArrowNextButton onClick={handleCheckNextIndexCard}>
        <StyledImgArrowButton src={arrowRight} alt="arrowRight" />
      </StyledArrowNextButton>
    </StyledArrowContainer>
  )
}