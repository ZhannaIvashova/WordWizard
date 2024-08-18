import { useState } from 'react';
import { WORDS } from '../../constants';
import { 
  StyledCardConteiner, StyledCard, StyledCardBName,
  StyledCardButton, StyledCardTranslate, StyledCardNextButton
} from './styleCard'


export const Card = () => {

  const [isCheck, setIsCheck] = useState(null);
  const handleCheckState = (id) => setIsCheck(id);

  const [indexCurrent, setIndexCurrent] = useState(0);
  const handleCheckIndexCard = () => {
    indexCurrent + 1 <= WORDS.length - 1 
    ? setIndexCurrent(indexCurrent + 1) 
    : setIndexCurrent(0)
  }

  return (
    <StyledCardConteiner>
      <StyledCard>
        <StyledCardBName>
          {WORDS[indexCurrent].english.charAt(0).toUpperCase() 
            + WORDS[indexCurrent].english.slice(1)}
        </StyledCardBName>
        <div>{WORDS[indexCurrent].transcription}</div>
        {
          isCheck != WORDS[indexCurrent].id ?
          <StyledCardButton onClick={() => handleCheckState(WORDS[indexCurrent].id)}>
            Проверить
          </StyledCardButton>
          : <StyledCardTranslate>
            {WORDS[indexCurrent].russian.charAt(0).toUpperCase() 
            + WORDS[indexCurrent].russian.slice(1)}
          </StyledCardTranslate>
        }

      </StyledCard>
      <StyledCardNextButton onClick={handleCheckIndexCard}>
        Дальше
      </StyledCardNextButton>
    </StyledCardConteiner>
  )


  /*return WORDS.map((item, index) => (
    <StyledCardConteiner>
      <StyledCard>
        <StyledCardBName>
          {item.english.charAt(0).toUpperCase() + item.english.slice(1)}
        </StyledCardBName>
        <div>{item.transcription}</div>
        {
          isCheck != item.id ?
          <StyledCardButton onClick={() => handleCheckState(item.id)}>
            Проверить
          </StyledCardButton>
          : <StyledCardTranslate>
            {item.russian.charAt(0).toUpperCase() + item.russian.slice(1)}
          </StyledCardTranslate>
        }

      </StyledCard>
      <StyledCardNextButton>&#x2192;</StyledCardNextButton>
    </StyledCardConteiner>
  ))*/
}