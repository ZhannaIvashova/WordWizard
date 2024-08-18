import { useState } from 'react';
import { HeaderTable } from '../HeaderTable/HeaderTable';
import { InputTable } from '../InputTable/InputTable';
import { AddingWords } from '../AddingWords/AddingWords';
import { Card } from '../Card/Card';
import { 
  StyledMain, StyledListContainer, StyledList, 
  StyledListContainerHeader, StyledStartTraining, StyledCard 
} from './styleWordlist';

export const Wordlist = () => {

  const [isVisible, setIsVisible] = useState(true);
  const handleStartTraining = () => setIsVisible(false);

  return(
    <StyledMain>
      <StyledListContainer>
        <StyledListContainerHeader>
          {isVisible ? <h2>Список слов</h2> : <h2>Режим тренировки</h2>}
          <StyledStartTraining onClick={handleStartTraining}>Тренироваться</StyledStartTraining>
        </StyledListContainerHeader>
        {isVisible ?
          <StyledList>
            <HeaderTable />
            <InputTable />
            <AddingWords />
          </StyledList>
          : <StyledCard><Card /></StyledCard>
        }
      </StyledListContainer>
    </StyledMain>
  )
}
