import { useState } from 'react';
import { WORDS } from '../../constants';
import { Card } from '../Card/Card';
import { ArrowContainer } from '../ArrowContainer/ArrowContainer';
import { StyledCardContainer} from './styleCardContainer'


export const CardContainer = () => {

  const [checkedWordId, setCheckedWordId] = useState(null);
  const handleCheckWordId = (id) => setCheckedWordId(id);

  const [indexCurrent, setIndexCurrent] = useState(0);
  const handleCheckNextIndexCard = () => {
    indexCurrent + 1 <= WORDS.length - 1 
    ? setIndexCurrent(indexCurrent + 1) 
    : setIndexCurrent(0);
  }
  const handleCheckPrevIndexCard = () => {
    indexCurrent !== 0
    ? setIndexCurrent(indexCurrent - 1)
    : setIndexCurrent(WORDS.length - 1) ;
  }

  return (
    <StyledCardContainer>
      <Card
        word={WORDS[indexCurrent]}
        checkedWordId={checkedWordId}
        handleCheckWordId={handleCheckWordId}
      />
      <ArrowContainer 
        handleCheckPrevIndexCard={handleCheckPrevIndexCard} 
        handleCheckNextIndexCard={handleCheckNextIndexCard} 
      />
    </StyledCardContainer>
  )
}