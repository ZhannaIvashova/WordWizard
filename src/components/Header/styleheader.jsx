import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  background-color: black;
`

export const StyledHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledLogo = styled.span`
  color: yellow;
  font-size: 24px;
`
export const StyledRegistrationWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
`
export const StyledRegistrationBase = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
