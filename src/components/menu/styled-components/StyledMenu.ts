import styled from 'styled-components';

export const MenuButton = styled.button`
  background-color: white;
  border: none;
  border: 1px solid teal;
  color: teal;
  cursor: pointer;
  padding: 7.5px 15px;
  width: max-content;

  &:hover {
    background-color: #b9e7e7;
    border: 1px solid white;
    color: black;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  gap: 25px;
`;

export const MenuPostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const MenuPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MenuSubtitle = styled.h2`
  color: #555;
`;

export const MenuTitle = styled.h1`
  color: #555;
  font-size: 20px;
`;
