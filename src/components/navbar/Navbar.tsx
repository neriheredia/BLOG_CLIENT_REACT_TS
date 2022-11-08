import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Images } from '@/constants';
import {
  DesktopContainer,
  Links,
  Logo,
  ResponsiveContainer,
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
import { Menu, SidebarMenu } from './components';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const currentUser = useSelector((state: AppStore) => state.user.currentUser);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigation('/');
  };

  return (
    <>
      <ResponsiveContainer>
        <Link className="link" to="/">
          <Logo src={Images.Logo} alt="Logo-Empresa" size={50} />
        </Link>
        <Menu lineStatus={isActive} setActive={setIsActive}>
          <SidebarMenu />
        </Menu>
      </ResponsiveContainer>
      <DesktopContainer>
        <Link className="link" to="/">
          <Logo src={Images.Logo} alt="Logo-Empresa" size={100} />
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
      </DesktopContainer>
    </>
  );
};

export default Navbar;
