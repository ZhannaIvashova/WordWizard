import { styled } from 'styled-components';

export const SyledWrapperBase = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px;
`
export const SyledContainerButtonBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SyledButtonBase = styled.button`
  &:hover {
    cursor: pointer;
  }
`
/*export const StyledBorderBase = styled.div`
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  ${props => props.isLast && 'border-right: 1px solid black'}
`*/

export const StyledBorderBase = (props) => `
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  ${props.isLast ? 'border-right: 1px solid black;' : ''}
`;
