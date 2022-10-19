import { Link } from 'react-router-dom';
import { Images } from '@/constants';
import {
  Container,
  Links,
  Logo,
  Titles,
  UserState,
  Write,
} from './styled-components';

const Navbar = () => {
  const currentUser = false;
  return (
    <Container>
      <Logo src={Images.Logo} alt="Logo-Empresa" />
      <Links>
        <Link className="link" to="/">
          <Titles>ART</Titles>
        </Link>
        <Link className="link" to="/">
          <Titles>SCIENCE</Titles>
        </Link>
        <Link className="link" to="/">
          <Titles>TECHNOLOGY</Titles>
        </Link>
        <Link className="link" to="/">
          <Titles>CINEMA</Titles>
        </Link>
        <Link className="link" to="/">
          <Titles>DESIGN</Titles>
        </Link>
        <Link className="link" to="/">
          <Titles>FOOD</Titles>
        </Link>
        <UserState>{currentUser && 'pedro'}</UserState>
        {currentUser ? (
          <UserState>Logout</UserState>
        ) : (
          <Link className="link" to="/login">
            <Titles>Login</Titles>
          </Link>
        )}
        <Write>
          <Link className="link" to="/write">
            <Titles>Write</Titles>
          </Link>
        </Write>
      </Links>
    </Container>
  );
};

export default Navbar;
