import { Link } from 'react-router-dom';
import {
  MenuButton,
  MenuContainer,
  MenuPostImage,
  MenuPosts,
  MenuSubtitle,
  MenuTitle,
} from './styled-components';
import { usePosts } from '@/pages/home/hook';
import { IPostMenu } from '@/models';

interface Props {
  cat: string;
}

const Menu = ({ cat }: Props) => {
  const { posts } = usePosts(cat);

  return (
    <MenuContainer>
      <MenuTitle>Other posts you may like</MenuTitle>
      {posts &&
        posts.map(({ postId, postImage, postTitle }: IPostMenu) => (
          <MenuPosts key={postId}>
            <MenuPostImage src={postImage} />
            <MenuSubtitle>{postTitle}</MenuSubtitle>
            <Link className="link" to={`/post/${postId}`}>
              <MenuButton>Read More</MenuButton>
            </Link>
          </MenuPosts>
        ))}
    </MenuContainer>
  );
};

export default Menu;
