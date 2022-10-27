import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import {
  SingleAvatar,
  SingleAvatarDefault,
  SingleContainer,
  SingleContent,
  SingleDescription,
  SingleEdit,
  SingleImage,
  SingleImageEdit,
  SingleSeparator,
  SingleTitle,
  SingleUser,
  SingleUserName,
} from './styled-components';
import { Images } from '@/constants';
import { Menu } from '@/components';
import { getPathId, postCapitalize } from '@/utilities';
import { usePost } from './hook';
import { AppStore } from '@/redux/store';

const Single = () => {
  const location = useLocation();
  const pathId = getPathId(location);
  const currentUser = useSelector((state: AppStore) => state.user.currentUser);

  const {
    postImage,
    loading,
    postDescription,
    postCategory,
    postUserId,
    postTitle,
    postCreated,
    postUserProfileImage,
    postUserAvatar,
    postUserCreator,
    postId,
  } = usePost(pathId);

  return (
    <SingleContainer>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <SingleContent>
            <SingleImage src={postImage} />
            <SingleUser>
              {postUserProfileImage && postUserProfileImage !== '' ? (
                <SingleAvatar src={postUserProfileImage} />
              ) : (
                <SingleAvatarDefault>{postUserAvatar}</SingleAvatarDefault>
              )}
              <SingleSeparator>
                <SingleUserName>
                  {postUserCreator && postCapitalize(postUserCreator)}
                </SingleUserName>
                <SingleDescription>
                  {postCreated &&
                    moment(postCreated).format('MMMM Do YYYY, h:mm:ss a')}
                </SingleDescription>
                {currentUser && (
                  <SingleEdit>
                    <Link
                      to={`/write?edit=${postId}`}
                      state={{
                        postImage,
                        postDescription,
                        postTitle,
                        postCategory,
                      }}
                    >
                      <SingleImageEdit src={Images.Edit} alt="" />
                    </Link>
                    <SingleImageEdit
                      onClick={() => {}}
                      src={Images.Delete}
                      alt=""
                    />
                  </SingleEdit>
                )}
              </SingleSeparator>
            </SingleUser>
            <SingleTitle>{postTitle}</SingleTitle>
            <SingleDescription>{postDescription}</SingleDescription>
          </SingleContent>
          <Menu cat={postCategory} />
        </>
      )}
    </SingleContainer>
  );
};

export default Single;
