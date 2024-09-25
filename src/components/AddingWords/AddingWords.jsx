//import { WORDS } from '../../constants';
import { ContainerButton } from '../ContainerButton/ContainerButton';
import { StyledItemCell } from '../styleGeneral';

export const AddingWords = ({ words, deleteWord }) => {
  return words.map((item, index) => (
    <>
      <StyledItemCell>{index + 1}</StyledItemCell>
      <StyledItemCell>{item.english}</StyledItemCell>
      <StyledItemCell>{item.transcription}</StyledItemCell>
      <StyledItemCell>{item.russian}</StyledItemCell>
      <StyledItemCell>{item.tags}</StyledItemCell>
      <ContainerButton isDeleteAddedWord deleteWord={() => deleteWord(item.id)}></ContainerButton>
    </>
  ))
}