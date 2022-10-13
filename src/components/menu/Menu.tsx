import {
  MenuButton,
  MenuContainer,
  MenuPostImage,
  MenuPosts,
  MenuSubtitle,
  MenuTitle,
} from './styled-components';
import { postFakeData } from '@/constants';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuTitle>Other posts you may like</MenuTitle>
      {postFakeData.map(({ id, img, title }) => (
        <MenuPosts key={id}>
          <MenuPostImage src={img} />
          <MenuSubtitle>{title}</MenuSubtitle>
          <MenuButton>Read More</MenuButton>
        </MenuPosts>
      ))}
    </MenuContainer>
  );
};

export default Menu;