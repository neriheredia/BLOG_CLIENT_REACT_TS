import { Link } from 'react-router-dom';
import NotFoundImg from '@/assets/404.png';
import {
  Image,
  NotFoundContainer,
  NotFoundLink,
  NotFoundTitle,
} from './styled-components';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>NOT FOUND</NotFoundTitle>
      <Image src={NotFoundImg} alt="Not Found" />
      <Link className="link" to="/">
        <NotFoundLink>GO HOME</NotFoundLink>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
