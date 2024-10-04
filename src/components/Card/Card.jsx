import { useRef, useEffect } from 'react';

import { 
  StyledCard, StyledCardName, 
  StyledCardTranslate, StyledCardButton
} from './styleCard';


export const Card = ({ word, checkedWordId, handleCheckWordId }) => {

  const capitalizedWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  //создаю реф для кнопки
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current && checkedWordId !== word.id) {
      buttonRef.current.focus();
    }
  }, [word]);

  return (
    <StyledCard>
      <StyledCardName>
        { capitalizedWord(word.english) }
      </StyledCardName>
      <div>{word.transcription}</div>
      {
        checkedWordId !== word.id
        ? <StyledCardButton 
          ref={buttonRef}
          onClick={() => handleCheckWordId(word.id)}>
            Проверить
          </StyledCardButton>
        : <StyledCardTranslate>
            { capitalizedWord(word.russian) }
        </StyledCardTranslate>
      }
    </StyledCard>
  )
}
