import { useLocation } from 'react-router-dom';
import {
  SingleAvatar,
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
import Edit from '@/assets/edit.png';
import Delete from '@/assets/delete.png';
import { Menu } from '@/components';
import { getPathId } from '@/utilities';
import { usePost } from './hook';

const Single = () => {
  const location = useLocation();
  const pathId = getPathId(location);
  const currentUser = false;

  const {
    postImage,
    loading,
    postDescription,
    postCategory,
    postId,
    postTitle,
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
              <SingleAvatar src="https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-online-de-como-leer-el-rostro-en-las-personas:-los-microgestos_l_primaria_1_1561117635.jpg" />
              <SingleSeparator>
                <SingleUserName>HEREDIA PABLO</SingleUserName>
                <SingleDescription>
                  Lunes 16 de Febrero de 2022
                </SingleDescription>
                {currentUser && (
                  <SingleEdit>
                    <SingleImageEdit src={Edit} alt="" />
                    <SingleImageEdit onClick={() => {}} src={Delete} alt="" />
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
