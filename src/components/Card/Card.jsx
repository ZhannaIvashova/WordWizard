import { useState } from 'react';
import { WORDS } from '../../constants';
import arrowRight from '../../../public/images/arrow-right.svg';
import arrowLeft from '../../../public/images/arrow-left.svg';
//import { ArrowContainer } from '../ArrowContainer/ArrowContainer';
import { 
  StyledCardContainer, StyledCard, StyledCardName, 
  StyledCardButton, StyledCardTranslate, StyledArrowContainer, 
  StyledArrowPrevButton, StyledArrowNextButton, StyledImgArrowButton
} from './styleCard'


export const Card = () => {

  const [checkedWordId, setCheckedWordId] = useState(null);
  const handleCheckState = (id) => setCheckedWordId(id);
  
  const [indexCurrent, setIndexCurrent] = useState(0);
  const handleCheckNextIndexCard = () => {
    indexCurrent + 1 <= WORDS.length - 1 
    ? setIndexCurrent(indexCurrent + 1) 
    : setIndexCurrent(0)
  }
  const handleCheckPrevIndexCard = () => {
    indexCurrent !== 0
    ? setIndexCurrent(indexCurrent - 1)
    : setIndexCurrent(WORDS.length - 1)
  }

  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledCardName>
          {WORDS[indexCurrent].english.charAt(0).toUpperCase() 
            + WORDS[indexCurrent].english.slice(1)}
        </StyledCardName>
        <div>{WORDS[indexCurrent].transcription}</div>
        {
          checkedWordId !== WORDS[indexCurrent].id
          ? <StyledCardButton onClick={() => handleCheckState(WORDS[indexCurrent].id)}>
              Проверить
            </StyledCardButton>
          : <StyledCardTranslate>
              {WORDS[indexCurrent].russian.charAt(0).toUpperCase() 
              + WORDS[indexCurrent].russian.slice(1)}
          </StyledCardTranslate>
        }
      </StyledCard>
      <StyledArrowContainer>
        <StyledArrowPrevButton onClick={handleCheckPrevIndexCard}>
          <StyledImgArrowButton src={arrowLeft} alt="arrowLeft" />
        </StyledArrowPrevButton>
        <StyledArrowNextButton onClick={handleCheckNextIndexCard}>
          <StyledImgArrowButton src={arrowRight} alt="arrowRight" />
        </StyledArrowNextButton>
      </StyledArrowContainer>
    </StyledCardContainer>
  )
  

  /*
  <StyledCard>
        <StyledCardName>
          {WORDS[indexCurrent].english.charAt(0).toUpperCase() 
            + WORDS[indexCurrent].english.slice(1)}
        </StyledCardName>
        <div>{WORDS[indexCurrent].transcription}</div>
        {
          checkedWordId != WORDS[indexCurrent].id 
          ? <StyledCardButton onClick={() => handleCheckState(WORDS[indexCurrent].id)}>
              Проверить
            </StyledCardButton>
          : <StyledCardTranslate>
              {WORDS[indexCurrent].russian.charAt(0).toUpperCase() 
              + WORDS[indexCurrent].russian.slice(1)}
          </StyledCardTranslate>
        }
      </StyledCard>

  */

  /*
  <StyledArrowContainer>
        <StyledArrowPrevButton onClick={handleCheckIndexCard}>
          <StyledImgArrowButton src={arrowLeft} alt="arrowLeft" />
        </StyledArrowPrevButton>
        <StyledArrowNextButton onClick={handleCheckIndexCard}>
          <StyledImgArrowButton src={arrowRight} alt="arrowRight" />
        </StyledArrowNextButton>
      </StyledArrowContainer>
  */
}