//import { WORDS } from '../../constants';
import { ContainerButton } from '../ContainerButton/ContainerButton';
import { StyledItemCell } from '../styleGeneral';

export const AddingWords = ({ words }) => {
  return words.map((item, index) => (
    <>
      <StyledItemCell>{item.id}</StyledItemCell>
      <StyledItemCell>{item.english}</StyledItemCell>
      <StyledItemCell>{item.transcription}</StyledItemCell>
      <StyledItemCell>{item.russian}</StyledItemCell>
      <StyledItemCell>{item.theme}</StyledItemCell>
      <ContainerButton></ContainerButton>
    </>
  ))
}