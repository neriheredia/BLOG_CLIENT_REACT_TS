import styled from 'styled-components';

export const WriteContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const WriteContent = styled.div`
  flex: 5;
`;

export const WriteMenu = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  gap: 20px;
`;

export const WriteItem = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  color: #555;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 12px;
  justify-content: space-between;
  padding: 10px;
`;

export const WriteInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 4px;
`;

export const WriteEditorContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  overflow: scroll;
  height: 300px;
`;

export const WriteTitle = styled.h1`
  font-size: 20px;
`;

export const WriteFile = styled.label`
  cursor: pointer;
  font-size: 13px;
  text-decoration: underline;

  &:hover {
    color: #8fd6d9;
  }
`;

export const WriteButtons = styled.div`
  display: flex;
  justify-content: space-space-between;
`;

export const WriteButton = styled.button`
  background-color: white;
  border: 1px solid #97c2fc;
  border-radius: 4px;
  color: #97c2fc;
  cursor: pointer;
  margin-right: 4px;
  padding: 3px 5px;
`;

export const WriteCategories = styled.div`
  align-items: center;
  display: flex;
  color: #97c2fc;
  gap: 2px;
`;
