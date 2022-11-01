import { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import { capitalize, createAndUpdatePost, upload } from '@/utilities';
import 'react-quill/dist/quill.snow.css';
import {
  WriteButton,
  WriteButtons,
  WriteCategories,
  WriteContainer,
  WriteContent,
  WriteEditorContainer,
  WriteFile,
  WriteInput,
  WriteItem,
  WriteMenu,
  WriteTitle,
} from './styled-components';
import { Alert, Spinner } from '@/components';
import { AppStore, INewPost } from '@/models';

const Write = () => {
  const navigation = useNavigate();
  const currentUser = useSelector((state: AppStore) => state.user.currentUser);
  const location = useLocation();
  const id = location.state ? location.state.postId : '';

  const [file, setFile] = useState<HTMLInputElement | null>(null);
  const [warning, setWarning] = useState<boolean>(false);
  const [onError, setOnError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [desc, setDesc] = useState<string>(
    location.state ? location.state.postDescription : ''
  );
  const [newPost, setNewPost] = useState<INewPost>({
    category: location.state?.postCategory || '',
    title: location.state?.postTitle || '',
    photo: location.state ? location.state.postImage : '',
    photoPublicId: location.state ? location.state.postImageId : '',
    user: location.state ? location.state.postUserId : currentUser.id,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const handlePublishAndSave = async () => {
    if (
      !newPost.category.length ||
      !newPost.title.length ||
      !newPost.user.length
    ) {
      setIsActive(true);
      setWarning(true);
      setText('Debe llenar todos los campos.');
      return;
    }

    setIsLoading(true);

    if (!newPost.photo.length) {
      if (!file) {
        setIsActive(true);
        setWarning(true);
        setText('Debe subir una imagen para crear el post.');
        return;
      }

      const result = await upload(file);

      if (result) {
        const newCreatePost = {
          ...newPost,
          description: capitalize(desc),
          photo: newPost.photo.length ? newPost.photo : result.data.photo,
          photoPublicId: result?.data.photoPublicId,
        };

        const response = await createAndUpdatePost(id, newCreatePost);

        if (!response.status) {
          setIsLoading(false);
          setOnError(response.status);
          setText('Ocurrio un problema inesperado!');
        }

        setIsLoading(false);
        setIsActive(true);
        setText('Se creo el post correctamente');
        setTimeout(() => {
          response.status && navigation('/');
        }, 3000);
      }
      return;
    }

    const updatePost = {
      ...newPost,
      description: capitalize(desc),
    };

    const response = await createAndUpdatePost(id, updatePost);
    if (!response.status) {
      setIsLoading(false);
      setOnError(response.status);
      setText('Ocurrio un problema inesperado!');
      return;
    }

    setIsLoading(false);
    setIsActive(true);
    setText('Se actuliazo su post!');
    setTimeout(() => {
      response.status && navigation('/');
    }, 3000);
  };

  if (isActive) {
    return (
      <Alert
        error={onError}
        text={text}
        showAlert={isActive}
        setShowAlert={setIsActive}
        warning={warning}
      />
    );
  }

  if (isLoading) {
    return <Spinner isVisible={isLoading} />;
  }

  return (
    <WriteContainer>
      <WriteContent>
        <WriteInput
          $botton
          type="text"
          name="title"
          value={newPost.title}
          placeholder="Title"
          onChange={(e) => handleChange(e)}
        />
        <WriteEditorContainer>
          <ReactQuill
            className="editor"
            theme="snow"
            value={desc}
            onChange={setDesc}
          />
        </WriteEditorContainer>
      </WriteContent>
      <WriteMenu>
        <WriteItem>
          <WriteTitle>Publish</WriteTitle>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <WriteInput
            style={{ display: 'none' }}
            type="file"
            id="file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
          <WriteFile className="file" htmlFor="file">
            Upload Image
          </WriteFile>
          <WriteButtons>
            <WriteButton onClick={handlePublishAndSave}>
              {location.state ? 'Save as a draft' : 'Publish'}
            </WriteButton>
          </WriteButtons>
        </WriteItem>
        <WriteItem className="item">
          <WriteTitle>Category</WriteTitle>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.category === 'news'}
              name="category"
              value="news"
              id="news"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="news">NEWS</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.category === 'computing'}
              name="category"
              value="computing"
              id="computing"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="computing">COMPUTING</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.category === 'marketing'}
              name="category"
              value="marketing"
              id="marketing"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="marketing">MARKETING</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.category === 'labor'}
              name="category"
              value="labor"
              id="labor"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="labor">LABOR</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.category === 'stories'}
              name="category"
              value="stories"
              id="stories"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="stories">STORIES</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.category === 'sports'}
              name="category"
              value="sports"
              id="sports"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="sports">SPORTS</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.category === 'music'}
              name="category"
              value="music"
              id="music"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="music">MUSIC</WriteFile>
          </WriteCategories>
        </WriteItem>
      </WriteMenu>
    </WriteContainer>
  );
};

export default Write;
