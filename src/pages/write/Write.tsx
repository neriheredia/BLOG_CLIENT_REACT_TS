import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { upload } from '@/utilities';
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

const Write = () => {
  const location = useLocation();
  const { postCategory, postDescription, postImage, postTitle } =
    location.state;
  const [desc, setDesc] = useState<string>(postDescription || '');
  const [file, setFile] = useState<any | null>(null);
  const [newPost, setNewPost] = useState({
    cat: postCategory || '',
    title: postTitle || '',
    photo: postImage || '',
    photoPublicId: '',
  });

  const handleChange = (event: any) => {
    const { value } = event.target;
    setNewPost({ ...newPost, [event.target.name]: value });
  };

  const handlePublish = async () => {
    // TODO: Crear un Custom Hook Para Subir las imagenes
    const result = await upload(file); //! Delete Function and convert CustomHook

    const newCreatePost = {
      ...newPost,
      desc,
      photo: result?.data.photo,
      photoPublicId: result?.data.photoPublicId,
    };

    // TODO: Create method, newPostSlice and UpdatePostSlice
    console.log({ newCreatePost });
  };

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
            onChange={(e) => setFile(e.target.files[0])}
          />
          <WriteFile className="file" htmlFor="file">
            Upload Image
          </WriteFile>
          <WriteButtons>
            <WriteButton>Save as a draft</WriteButton>
            <WriteButton onClick={handlePublish}>Publish</WriteButton>
          </WriteButtons>
        </WriteItem>
        <WriteItem className="item">
          <WriteTitle>Category</WriteTitle>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.cat === 'news'}
              name="cat"
              value={newPost.cat}
              id="news"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="news">NEWS</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.cat === 'computing'}
              name="cat"
              value={newPost.cat}
              id="computing"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="computing">COMPUTING</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.cat === 'marketing'}
              name="cat"
              value={newPost.cat}
              id="marketing"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="marketing">MARKETING</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.cat === 'labor'}
              name="cat"
              value={newPost.cat}
              id="labor"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="labor">LABOR</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.cat === 'stories'}
              name="cat"
              value={newPost.cat}
              id="stories"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="stories">STORIES</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.cat === 'sports'}
              name="cat"
              value={newPost.cat}
              id="sports"
              onChange={(e) => handleChange(e)}
            />
            <WriteFile htmlFor="sports">SPORTS</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={newPost.cat === 'music'}
              name="cat"
              value={newPost.cat}
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
