import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Images } from '@/constants';
import {
  Container,
  Links,
  Logo,
  SingleAvatarDefault,
  Titles,
  UserState,
  Write,
  WriteDisabled,
} from './styled-components';
import { categoryCapitalize, categoryCapitalizeSearch } from '@/utilities';
import { logoutSuccess } from '@/redux/states/user';
import { routesNavigation } from './constants';
import { AppStore } from '@/models';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const currentUser = useSelector((state: AppStore) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigation('/');
  };

  return (
    <Container>
      <Link className="link" to="/">
        <Logo src={Images.Logo} alt="Logo-Empresa" />
      </Link>
      <Links>
        {routesNavigation.map(({ categryId, categoryName }) => (
          <Titles key={categryId}>
            <Link
              className="link"
              to={`/?cat=${categoryCapitalizeSearch(categoryName)}`}
            >
              {categoryCapitalize(categoryName)}
            </Link>
          </Titles>
        ))}
        {currentUser ? (
          <>
            <UserState onClick={handleLogout}>Logout</UserState>
            <SingleAvatarDefault>{currentUser.avatar}</SingleAvatarDefault>
          </>
        ) : (
          <Link className="link" to="/login">
            <Titles>Login</Titles>
          </Link>
        )}
        {!location.state ? (
          <Link className="link" to={!currentUser ? '/login' : '/write'}>
            <Write>
              <Titles>Write</Titles>
            </Write>
          </Link>
        ) : (
          <WriteDisabled>
            <Titles>Write</Titles>
          </WriteDisabled>
        )}
      </Links>
    </Container>
  );
};

export default Navbar;
