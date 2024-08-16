import { useState } from 'react';
import { HeaderTable } from '../HeaderTable/HeaderTable';
import { InputTable } from '../InputTable/InputTable';
import { AddingWords } from '../AddingWords/AddingWords';
import { StyledMain, StyledListContainer, StyledList, StyledListContainerHeader, StyledStartTraining } from './styleWordlist';

export const Wordlist = () => {

  const [isVisible, setIsVisible] = useState(true);
  const handleStartTraining = () => setIsVisible(false);

  return(
    <StyledMain>
      <StyledListContainer>
        <StyledListContainerHeader>
          <h2>Список слов</h2>
          <StyledStartTraining href="#" onClick={handleStartTraining}>Тренироваться</StyledStartTraining>
        </StyledListContainerHeader>
        {isVisible ?
          <StyledList>
            <HeaderTable />
            <InputTable />
            <AddingWords />
          </StyledList>
          : 'тут будут карточки'
        }
      </StyledListContainer>
    </StyledMain>
  )
}
