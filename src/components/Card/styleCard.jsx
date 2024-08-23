import { styled } from 'styled-components';


export const StyledCard = styled.div`
  width: 120px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 50px 40px;
  border: 1px solid black;
  border-radius: 10px;
  border-color: #63d0eb; 
  background-color: #d0f4fd;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
`
export const StyledCardName = styled.h3`
  font-size: 30px;
`
export const StyledCardTranslate = styled.div`
  margin-top: 80px;
  color: blue;
  font-size: 20px;
`
export const StyledCardButton = styled.button`
  margin-top: 80px;
  padding: 3px 10px;
  border-radius: 50px;
  background-color: #cbcbcb;
  &:hover {
    cursor: pointer;
  }
`