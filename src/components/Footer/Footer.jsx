import { StyledFooter, StyledContacts, StyledFooterLink, 
  StyledFooterLinkImg, StyledCopyright
} from './styleFooter';
import { StyledWrapperBase} from '../styleGeneral';
import githubLogo from '/images/github-logo.svg';
import telegramLogo from '/images/telegram-logo.svg';
import mailLogo from '/images/mail-logo.svg';
import '../../index.css'

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledWrapperBase>
          <StyledContacts>
            <StyledFooterLink 
              href="https://github.com/ZhannaIvashova" 
              target="_blank">
                <StyledFooterLinkImg src={githubLogo} alt="github-logo" />
            </StyledFooterLink>
            <StyledFooterLink 
              href="https://t.me/Zhanna_Ivaa" 
              target="_blank">
                <StyledFooterLinkImg src={telegramLogo} alt="github-logo" />
            </StyledFooterLink>
            <StyledFooterLink 
              href="mailto:IvashovaHome@yandex.ru" 
              target="_blank">
                <StyledFooterLinkImg src={mailLogo} alt="github-logo" />
            </StyledFooterLink>
          </StyledContacts>
          <StyledCopyright>Copyright &copy; 2024</StyledCopyright>
        </StyledWrapperBase>
      </StyledFooter>
    </>
  )
}
