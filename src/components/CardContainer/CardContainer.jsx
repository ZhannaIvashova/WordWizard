import { useState } from 'react';
//import { WORDS } from '../../constants';
import { Card } from '../Card/Card';
import { ArrowContainer } from '../ArrowContainer/ArrowContainer';
import { StyledCardContainer, StyledCountLearnedWords } from './styleCardContainer'


export const CardContainer = ({ words }) => {
  
  const [countLearnedWords, setCountLearnedWords] = useState(0);
  const [checkedWordId, setCheckedWordId] = useState(null);
  const handleCheckWordId = (id) => {
    setCheckedWordId(id);
    setCountLearnedWords(countLearnedWords + 1);
  }  

  const [indexCurrent, setIndexCurrent] = useState(0);
  const handleCheckNextIndexCard = () => {
    indexCurrent + 1 <= words.length - 1 
    ? setIndexCurrent(indexCurrent + 1) 
    : setIndexCurrent(0);
  }
  const handleCheckPrevIndexCard = () => {
    indexCurrent !== 0
    ? setIndexCurrent(indexCurrent - 1)
    : setIndexCurrent(words.length - 1) ;
  }

  return (
    <StyledCardContainer>
      <Card
        word={words[indexCurrent]}
        checkedWordId={checkedWordId}
        handleCheckWordId={handleCheckWordId}
      />
      <ArrowContainer 
        handleCheckPrevIndexCard={handleCheckPrevIndexCard} 
        handleCheckNextIndexCard={handleCheckNextIndexCard} 
      />
      <StyledCountLearnedWords> 
        Слов изучено: { countLearnedWords } 
      </StyledCountLearnedWords>
    </StyledCardContainer>
  )
}
