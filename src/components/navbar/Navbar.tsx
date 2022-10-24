import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Images } from '@/constants';
import {
  Container,
  Links,
  Logo,
  SingleAvatarDefault,
  Titles,
  UserState,
  Write,
} from './styled-components';
import { AppStore } from '@/redux/store';
import {
  capitalize,
  categoryCapitalize,
  categoryCapitalizeSearch,
} from '@/utilities';
import { useCategories } from './hook';
import { ICategoryNavbar } from '@/models';
import { logoutSuccess } from '@/redux/states/user';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const currentUser = useSelector((state: AppStore) => state.user.currentUser);
  const { categories } = useCategories();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigation('/');
  };

  return (
    <Container>
      <Logo src={Images.Logo} alt="Logo-Empresa" />
      <Links>
        {categories &&
          categories.map(({ categryId, categoryName }: ICategoryNavbar) => (
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
        <Link className="link" to={!currentUser ? '/login' : '/write'}>
          <Write>
            <Titles>Write</Titles>
          </Write>
        </Link>
      </Links>
    </Container>
  );
};

export default Navbar;
