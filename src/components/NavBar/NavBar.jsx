import { StyledNavigation, StyledLink } from './styleNavBar';

export function NavBar() {

  return(
    <StyledNavigation>
      <StyledLink end to="/WordWizard">Главная страница</StyledLink>
      <StyledLink to="/WordWizard/game">Режим тренировки</StyledLink>
    </StyledNavigation>
  )
}
