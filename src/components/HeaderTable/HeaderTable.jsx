import { StyledHeaderTable } from './styleHeaderTable';

export const HeaderTable = () => {
  return(
    <>
      <StyledHeaderTable>№</StyledHeaderTable>
      <StyledHeaderTable>Значение</StyledHeaderTable>
      <StyledHeaderTable>Транскрипция</StyledHeaderTable>
      <StyledHeaderTable>Перевод</StyledHeaderTable>
      <StyledHeaderTable>Тема</StyledHeaderTable>
      <StyledHeaderTable isLast></StyledHeaderTable>
    </>
  )
}
