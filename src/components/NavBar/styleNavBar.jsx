import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 50px;
`

export const StyledLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  padding: 10px;
  font-size: 18px;

  &.active {
    font-weight: bolder;
    color: #0056b3;
  }

  &:hover {
    color: #0056b3;
  }
`
/*export const StyledRegistrationBase = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`*/