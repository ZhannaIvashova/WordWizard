import { 
  StyledHeader, StyledHeaderWrap, StyledLogo, 
  StyledRegistrationWrap, StyledRegistrationBase
} from './styleheader';
import { StyledWrapperBase} from '../styleGeneral';

export const Header = () => {
  return(
    <StyledHeader>
      <StyledWrapperBase>
        <StyledHeaderWrap>
          <StyledLogo>WordWizard</StyledLogo>
          <StyledRegistrationWrap>
            <StyledRegistrationBase href='#'>Log In</StyledRegistrationBase>
            <StyledRegistrationBase href='#'>Sign Up</StyledRegistrationBase>
          </StyledRegistrationWrap>
        </StyledHeaderWrap>
      </StyledWrapperBase>
    </StyledHeader>
  )
}
