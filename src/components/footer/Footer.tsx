import { Link } from 'react-router-dom';
import { FooterBold, FooterContainer, FooterText } from './styled-components';
import { Logo } from '@/components';
import logo from '@/assets/logo.png';

const Footer = () => (
  <FooterContainer>
    <Link className="link" to="/">
      <Logo src={logo} alt="Logo-Empresa" />
    </Link>
    <FooterText>
      The code to{' '}
      <FooterBold
        href="https://github.com/neriheredia/BLOG_CLIENT_REACT_TS"
        target="_blank"
        rel="noopener noreferrer"
      >
        Herediadev
      </FooterBold>
    </FooterText>
  </FooterContainer>
);

export default Footer;
