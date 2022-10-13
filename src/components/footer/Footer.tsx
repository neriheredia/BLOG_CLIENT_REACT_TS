import { FooterBold, FooterContainer, FooterText } from './styled-components';
import { Logo } from '@/components';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Logo-Empresa" />
      <FooterText>
        Made with ♥️ and <FooterBold>Herediadev</FooterBold>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
