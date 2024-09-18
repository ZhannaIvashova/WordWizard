import { useState, useMemo, useEffect } from 'react';
import { Card } from '../Card/Card';
import { ArrowContainer } from '../ArrowContainer/ArrowContainer';
import { StyledCardContainer, StyledCountLearnedWords } from './styleCardContainer'


export const CardContainer = ({ words }) => {

  //при каждом изменении words, будет вызываться useMemo и происходить рендом
  const randomWords = useMemo(() => 
    [...words].sort(() => Math.random() - 0.5), [words]);

  //сортировка слов в рандомном порядке, удобно, если данные приходят с сервера (в асинхронном порядке)
  /*const [randomWords, setRandomWords] = useState([]);
  useEffect(() => {
      const shuffledWords = [...words].sort(() => Math.random() - 0.5);
      setRandomWords(shuffledWords);
  }, [words]);
  console.log(randomWords)*/


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
    : setIndexCurrent(0);  //сделать предупреждение что карты кончились!!!!
  }
  const handleCheckPrevIndexCard = () => {
    indexCurrent !== 0
    ? setIndexCurrent(indexCurrent - 1)
    : setIndexCurrent(words.length - 1) ;
  }
  
  //прерывания рендиренга, если буду рендерится через useEffect
  /*if (randomWords.length === 0) {
    return
  }*/

  return (
    <StyledCardContainer>
      <Card
        word={randomWords[indexCurrent]}
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
