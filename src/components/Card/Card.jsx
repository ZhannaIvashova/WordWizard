import { 
  StyledCard, StyledCardName, 
  StyledCardTranslate, StyledCardButton
} from './styleCard';


export const Card = ({ word, checkedWordId, handleCheckWordId }) => {

  const capitalizedWord = (word) => word.charAt(0).toUpperCase() + word.slice(1)

  return (
    <StyledCard>
      <StyledCardName>
        { capitalizedWord(word.english) }
      </StyledCardName>
      <div>{word.transcription}</div>
      {
        checkedWordId !== word.id
        ? <StyledCardButton onClick={() => handleCheckWordId(word.id)}>
            Проверить
          </StyledCardButton>
        : <StyledCardTranslate>
            { capitalizedWord(word.russian) }
        </StyledCardTranslate>
      }
    </StyledCard>
  )
}