import { 
  StyledCard, StyledCardName, 
  StyledCardTranslate, StyledCardButton
} from './styleCard';


export const Card = ({ word, checkedWordId, handleCheckWordId }) => {

  return (
    <StyledCard>
      <StyledCardName>
        {word.english.charAt(0).toUpperCase() + word.english.slice(1)}
      </StyledCardName>
      <div>{word.transcription}</div>
      {
        checkedWordId !== word.id
        ? <StyledCardButton onClick={() => handleCheckWordId(word.id)}>
            Проверить
          </StyledCardButton>
        : <StyledCardTranslate>
            {word.russian.charAt(0).toUpperCase() + word.russian.slice(1)}
        </StyledCardTranslate>
      }
    </StyledCard>
  )
}