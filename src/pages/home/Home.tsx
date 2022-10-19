import { Link } from 'react-router-dom';
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
import { usePosts } from './hook';

const Home = () => {
  const { loading, posts } = usePosts();

  return (
    <>
      {!loading && (
        <HomePosts>
          {posts &&
            posts.map(
              ({ postId, postImage, postTitle, postDescription }: any) => (
                <HomePost key={postId}>
                  <HomeImageContent>
                    <HomeImage src={postImage} alt="" />
                  </HomeImageContent>
                  <HomeContent>
                    <Link className="link" to={`/post/${postId}`}>
                      <HomePostTitle>{postTitle}</HomePostTitle>
                    </Link>
                    <HomePostDescription>{postDescription}</HomePostDescription>
                    <HomeButton>
                      <Link className="link" to={`/post/${postId}`}>
                        Read More
                      </Link>
                    </HomeButton>
                  </HomeContent>
                </HomePost>
              )
            )}
        </HomePosts>
      )}
    </>
  );
};

export default Home;
