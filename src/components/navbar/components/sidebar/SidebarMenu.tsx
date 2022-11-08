import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  SidebarAvatar,
  SidebarContainer,
  SidebarLink,
  SidebarLinks,
} from './styled-components';
import { routesNavigation } from '../../constants';
import { categoryCapitalize, categoryCapitalizeSearch } from '@/utilities';
import { AppStore } from '@/models';
import { logoutSuccess } from '@/redux/states/user';

const SidebarMenu = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const currentUser = useSelector((state: AppStore) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigation('/');
  };

  return (
    <SidebarContainer>
      <SidebarLinks>
        {currentUser ? (
          <>
            <SidebarAvatar>{currentUser.avatar}</SidebarAvatar>
            <SidebarLink onClick={handleLogout} spacing={40}>
              Logout
            </SidebarLink>
          </>
        ) : (
          <Link className="link" to="/login">
            <SidebarLink spacing={40}>Login</SidebarLink>
          </Link>
        )}

        {routesNavigation.map(({ categryId, categoryName }) => (
          <SidebarLink key={categryId}>
            <Link
              className="link"
              to={`/?cat=${categoryCapitalizeSearch(categoryName)}`}
            >
              {categoryCapitalize(categoryName)}
            </Link>
          </SidebarLink>
        ))}
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default SidebarMenu;
