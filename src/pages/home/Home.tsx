import { useState } from 'react';
import { useAsync, useFetchAndLoad } from '@/hook';
import { getPosts } from '@/services';
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
import { formattedAllPosts } from '@/utilities';

const Home = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [posts, setPosts] = useState<any>(null);

  const getApiData = async () => {
    const response = await callEndpoint(getPosts());
    return response;
  };

  const postAdapterPrint = (data: any) => {
    const formatted = formattedAllPosts(data.data.docs);
    setPosts(formatted);
  };

  useAsync(getApiData, postAdapterPrint, () => {});

  return (
    <>
      {!loading && (
        <HomePosts>
          {posts &&
            posts.map(({ postId, image, postTitle, postDescription }: any) => (
              <HomePost key={postId}>
                <HomeImageContent>
                  <HomeImage src={image} alt="" />
                </HomeImageContent>
                <HomeContent>
                  <HomePostTitle>{postTitle}</HomePostTitle>
                  <HomePostDescription>{postDescription}</HomePostDescription>
                  <HomeButton>Read More</HomeButton>
                </HomeContent>
              </HomePost>
            ))}
        </HomePosts>
      )}
    </>
  );
};

export default Home;
