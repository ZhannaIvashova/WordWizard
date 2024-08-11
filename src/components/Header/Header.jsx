import { 
  StyledHeader, StyledHeaderWrap, StyledLogo, 
  StyledRegistrationWrap, StyledRegistrationBase
} from './styleheader';
import { SyledWrapperBase} from '../styleGeneral';

export const Header = () => {
  return(
    <StyledHeader>
      <SyledWrapperBase>
        <StyledHeaderWrap>
          <StyledLogo>WordWizard</StyledLogo>
          <StyledRegistrationWrap>
            <StyledRegistrationBase href='#'>Log In</StyledRegistrationBase>
            <StyledRegistrationBase href='#'>Sign Up</StyledRegistrationBase>
          </StyledRegistrationWrap>
        </StyledHeaderWrap>
      </SyledWrapperBase>
    </StyledHeader>
  )
}
