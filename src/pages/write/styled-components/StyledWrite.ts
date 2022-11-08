import styled from 'styled-components';
import { Device } from '@/styled-components';

export const WriteContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media ${Device.tabletL} {
    flex-direction: column;
  }
`;

export const WriteContent = styled.div`
  flex: 5;

  @media ${Device.tabletL} {
    padding: 0 10px;
  }
`;

export const WriteMenu = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  gap: 20px;

  @media ${Device.tabletL} {
    flex-direction: column-reverse;
    padding: 0 10px;
  }
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
  color: #555555;
  cursor: pointer;
  font-size: 13px;
  text-decoration: underline;

  &:hover {
    color: #6b94c9;
  }
`;

export const WriteButtons = styled.div`
  display: flex;
  justify-content: space-space-between;
`;

export const WriteButton = styled.button`
  background-color: white;
  border: 1px solid #6b94c9;
  border-radius: 4px;
  color: #6b94c9;
  cursor: pointer;
  font-weight: 600;
  margin-right: 4px;
  padding: 3px 5px;

  &:hover {
    background-color: #6b94c9;
    color: white;
    font-weight: 600;
  }
`;

export const WriteCategories = styled.div`
  align-items: center;
  display: flex;
  color: #97c2fc;
  gap: 2px;
`;
