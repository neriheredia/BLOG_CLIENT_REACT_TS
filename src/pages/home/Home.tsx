import { Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { formattedLocation } from '@/utilities';
import { Spinner } from '@/components';

const Home = () => {
  const location = useLocation().search;
  const formmatedCategorySearch = formattedLocation(location);
  const { loading, posts } = usePosts(formmatedCategorySearch);

  return (
    <>
      <Spinner isVisible={loading} size={40} text="Cargando..." />
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
                  <Link className="link" to={`/post/${postId}`}>
                    <HomeButton>Read More</HomeButton>
                  </Link>
                </HomeContent>
              </HomePost>
            )
          )}
      </HomePosts>
    </>
  );
};

export default Home;
