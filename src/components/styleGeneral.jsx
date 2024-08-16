import { styled } from 'styled-components';

export const StyledWrapperBase = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px;
`
export const StyledContainerButtonBase = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 10px;
`
export const StyledButtonBase = styled.button`
  height: 25px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`
export const StyledBorderBase = (props) => `
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  ${props.isLast ? 'border-right: 1px solid black;' : ''}
`;

export const StyledItemCell = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0 4px 15px;
  ${StyledBorderBase}
`
export const StyledImgButton = styled.img`
  width: 17px;
`