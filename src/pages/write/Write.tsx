import { useState } from 'react';
import ReactQuill from 'react-quill';
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
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <WriteContainer>
      <WriteContent>
        <WriteInput type="text" placeholder="Title" onChange={() => {}} />
        <WriteEditorContainer>
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
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
            name=""
            onChange={() => {}}
          />
          <WriteFile className="file" htmlFor="file">
            Upload Image
          </WriteFile>
          <WriteButtons>
            <WriteButton>Save as a draft</WriteButton>
            <WriteButton onClick={() => {}}>Publish</WriteButton>
          </WriteButtons>
        </WriteItem>
        <WriteItem className="item">
          <WriteTitle>Category</WriteTitle>
          <WriteCategories>
            <WriteInput
              type="radio"
              name="cat"
              value="art"
              id="art"
              onChange={() => {}}
            />
            <WriteFile htmlFor="art">Art</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              name="cat"
              value="science"
              id="science"
              onChange={() => {}}
            />
            <WriteFile htmlFor="science">Science</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              name="cat"
              value="technology"
              id="technology"
              onChange={() => {}}
            />
            <WriteFile htmlFor="technology">Technology</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              name="cat"
              value="cinema"
              id="cinema"
              onChange={() => {}}
            />
            <WriteFile htmlFor="cinema">Cinema</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              name="cat"
              value="design"
              id="design"
              onChange={() => {}}
            />
            <WriteFile htmlFor="design">Design</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              name="cat"
              value="food"
              id="food"
              onChange={() => {}}
            />
            <WriteFile htmlFor="food">Food</WriteFile>
          </WriteCategories>
        </WriteItem>
      </WriteMenu>
    </WriteContainer>
  );
};

export default Write;
