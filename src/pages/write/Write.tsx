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
  const [desc, setDesc] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [file, setFile] = useState<any | null>(null);
  const [cat, setCat] = useState<string>('');

  console.log(title);
  console.log(desc);
  console.log(file);
  console.log(cat);

  return (
    <WriteContainer>
      <WriteContent>
        <WriteInput
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
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
            name=""
            onChange={(e) => setFile(e.target.files[0])}
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
              checked={cat === 'news'}
              name="news"
              value="news"
              id="news"
              onChange={(e) => setCat(e.target.value)}
            />
            <WriteFile htmlFor="news">NEWS</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={cat === 'computing'}
              name="computing"
              value="computing"
              id="computing"
              onChange={(e) => setCat(e.target.value)}
            />
            <WriteFile htmlFor="computing">COMPUTING</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={cat === 'marketing'}
              name="marketing"
              value="marketing"
              id="marketing"
              onChange={(e) => setCat(e.target.value)}
            />
            <WriteFile htmlFor="marketing">MARKETING</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={cat === 'labor'}
              name="labor"
              value="labor"
              id="labor"
              onChange={(e) => setCat(e.target.value)}
            />
            <WriteFile htmlFor="labor">LABOR</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={cat === 'stories'}
              name="stories"
              value="stories"
              id="stories"
              onChange={(e) => setCat(e.target.value)}
            />
            <WriteFile htmlFor="stories">STORIES</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={cat === 'sports'}
              name="sports"
              value="sports"
              id="sports"
              onChange={(e) => setCat(e.target.value)}
            />
            <WriteFile htmlFor="sports">SPORTS</WriteFile>
          </WriteCategories>
          <WriteCategories>
            <WriteInput
              type="radio"
              checked={cat === 'music'}
              name="music"
              value="music"
              id="music"
              onChange={(e) => setCat(e.target.value)}
            />
            <WriteFile htmlFor="music">MUSIC</WriteFile>
          </WriteCategories>
        </WriteItem>
      </WriteMenu>
    </WriteContainer>
  );
};

export default Write;
