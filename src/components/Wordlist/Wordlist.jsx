import '../../index.css';
import { StyledMain, StyledList } from './styleWordlist';
import { HeaderTable } from '../HeaderTable/HeaderTable';
import { InputTable } from '../InputTable/InputTable';

export const Wordlist = () => {

  return(
    <StyledMain>
      <StyledList>
        <HeaderTable></HeaderTable>
        <InputTable></InputTable>
      </StyledList>
    </StyledMain>
  )
}
