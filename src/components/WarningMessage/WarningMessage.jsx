import { StyledWarningMessage, StyledButtonStartAgain } from './styleWarningMessage';


export const WarningMessage = ({ handleStartAgain } ) => {
  return (
    <>
      <StyledWarningMessage>Слова изучены, хотите начать сначала?</StyledWarningMessage>
      <StyledButtonStartAgain onClick={handleStartAgain}>Start Again</StyledButtonStartAgain>
    </>
  )
}