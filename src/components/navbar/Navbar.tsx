import { useSelector } from 'react-redux';
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
import { AppStore } from '@/redux/store';
import {
  capitalize,
  categoryCapitalize,
  categoryCapitalizeSearch,
} from '@/utilities';
import { useCategories } from './hook';
import { ICategoryNavbar } from '../../models/category.model';

const Navbar = () => {
  const currentUser = useSelector((state: AppStore) => state.user.currentUser);
  const { categories } = useCategories();

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
        <UserState>
          {currentUser && capitalize(currentUser.firstName)}
        </UserState>
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
