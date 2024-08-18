import { styled } from 'styled-components';

export const StyledMain = styled.main`
  background-color: rgb(245, 242, 247);
`
export const StyledListContainer = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding-top: 30px;
`

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: 0.3fr repeat(5, 1fr);
`

export const StyledListContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const StyledStartTraining = styled.button`
  border: none;
  background: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
