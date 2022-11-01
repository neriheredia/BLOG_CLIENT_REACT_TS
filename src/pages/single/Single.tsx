import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import DOMPurify from 'dompurify';
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
import { Menu, Spinner } from '@/components';
import { getPathId, postCapitalize } from '@/utilities';
import { usePost } from './hook';
import { AppStore } from '@/models';

const Single = () => {
  const location = useLocation();
  const pathId = getPathId(location);
  const currentUser = useSelector((state: AppStore) => state.user.currentUser);

  const {
    postImage,
    postImageId,
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
    <>
      <Spinner isVisible={loading} size={40} text="Cargando..." />
      <SingleContainer>
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
                      postId,
                      postUserId,
                      postImage,
                      postImageId,
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
          <SingleDescription
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(postDescription),
            }}
          />
        </SingleContent>
        <Menu cat={postCategory} />
      </SingleContainer>
    </>
  );
};

export default Single;
