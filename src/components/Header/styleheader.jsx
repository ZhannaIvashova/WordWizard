import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: #dce5e7;
`
export const StyledHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledLogoLink = styled(Link)`
  color: #15424d;
  font-size: 24px;
  text-decoration: none;
`
