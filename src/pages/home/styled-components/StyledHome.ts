import styled from 'styled-components';

export const HomePosts = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

export const HomePost = styled.div`
  display: flex;
  gap: 100px;

  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }
`;

export const HomeImageContent = styled.div`
  flex: 2;
  position: relative;

  &::after {
    content: '';
    background-color: #b9e7e7;
    height: 100%;
    left: -20px;
    position: absolute;
    top: 20px;
    width: 100%;
    z-index: -1;
  }
`;

export const HomeImage = styled.img`
  object-fit: cover;
  max-height: 400px;
  width: 100%;
`;

export const HomeContent = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-between;
`;

export const HomePostTitle = styled.h1`
  font-size: 48px;
`;

export const HomePostDescription = styled.p`
  font-size: 18px;
`;

export const HomeButton = styled.button`
  width: max-content;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: white;
  border: 1px solid teal;
  color: teal;

  &:hover {
    border: 1px solid white;
    background-color: #b9e7e7;
    color: black;
  }
`;
