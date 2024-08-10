import { styled } from 'styled-components';

const StyledHeaderTable = styled.div`
  text-align: center;
  border: 1px solid red;
`
const SyledContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonBase = styled.button`
  &:hover {
    cursor: pointer;
  }
`
const LocationBase = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 30px;
  border: 1px solid black;
`

export {
  StyledHeaderTable,
  SyledContainerButton,
  ButtonBase,
  LocationBase
};


