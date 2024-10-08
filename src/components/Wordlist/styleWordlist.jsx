import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledMain = styled.main`
  flex: 1;
  background-color: rgb(245, 242, 247);
`
export const StyledListContainer = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 30px 5px 0 5px;
`

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: 0.3fr repeat(5, 1fr);
  margin-top: 20px;
`

export const StyledCardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`

export const StyleEndTrainingLink = styled(Link)`
  color: #15424d;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`
