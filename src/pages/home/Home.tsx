import { postFakeData } from '@/constants';
import {
  HomePost,
  HomePosts,
  HomeImageContent,
  HomeImage,
  HomeContent,
  HomePostTitle,
  HomePostDescription,
  HomeButton,
} from './styled-components';

const Home = () => {
  return (
    <HomePosts>
      {postFakeData.map((post) => (
        <HomePost key={post.id}>
          <HomeImageContent>
            <HomeImage src={post.img} alt="" />
          </HomeImageContent>
          <HomeContent>
            <HomePostTitle>{post.title}</HomePostTitle>
            <HomePostDescription>{post.desc}</HomePostDescription>
            <HomeButton>Read More</HomeButton>
          </HomeContent>
        </HomePost>
      ))}
    </HomePosts>
  );
};

export default Home;
