import arrowRight from '/images/arrow-right.svg';
import arrowLeft from '/images/arrow-left.svg';
import {
    StyledArrowContainer, StyledArrowPrevButton, 
    StyledArrowNextButton, StyledImgArrowButton
} from './styleArrowContainer';


export const ArrowContainer = (props) => {
  
  return(
    <StyledArrowContainer>
      <StyledArrowPrevButton onClick={props.handleCheckPrevIndexCard}>
        <StyledImgArrowButton src={arrowLeft} alt="arrowLeft" />
      </StyledArrowPrevButton>
      <StyledArrowNextButton onClick={props.handleCheckNextIndexCard}>
        <StyledImgArrowButton src={arrowRight} alt="arrowRight" />
      </StyledArrowNextButton>
    </StyledArrowContainer>
  )
}