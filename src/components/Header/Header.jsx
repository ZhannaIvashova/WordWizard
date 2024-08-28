import { NavBar } from '../NavBar/NavBar';
import { StyledHeader, StyledHeaderWrap, StyledLogoLink } from './styleheader';
import { StyledWrapperBase} from '../styleGeneral';

export const Header = () => {
  return(
    <StyledHeader>
      <StyledWrapperBase>
        <StyledHeaderWrap>
          <StyledLogoLink to="/WordWizard">WordWizard</StyledLogoLink>
          <NavBar />
        </StyledHeaderWrap>
      </StyledWrapperBase>
    </StyledHeader>
  )

  /*
  <StyledRegistrationWrap>
            <StyledRegistrationBase href='#'>Log In</StyledRegistrationBase>
            <StyledRegistrationBase href='#'>Sign Up</StyledRegistrationBase>
          </StyledRegistrationWrap>
  */
}
