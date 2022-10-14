import styled from 'styled-components';

export const SingleContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const SingleContent = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  gap: 30px;
`;

export const SingleImage = styled.img`
  object-fit: cover;
  height: 300px;
  width: 100%;
`;

export const SingleUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`;

export const SingleAvatar = styled.img`
  border-radius: 50%;
  height: 50px;
  object-fit: cover;
  width: 50px;
`;

export const SingleSeparator = styled.div``;

export const SingleUserName = styled.div`
  font-size: bold;
`;

export const SingleDescription = styled.p`
  line-height: 30px;
  text-align: justify;
`;

export const SingleEdit = styled.div`
  display: flex;
  gap: 5px;
`;

export const SingleImageEdit = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;
`;

export const SingleTitle = styled.h1`
  color: #333;
  font-size: 42px;
`;
