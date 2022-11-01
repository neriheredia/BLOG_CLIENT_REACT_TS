import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 100px;
`;

export const Links = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const Titles = styled.h6`
  font-size: 16px;
  font-weight: 400;
`;

export const UserState = styled.span`
  cursor: pointer;
  font-weight: 600;
  margin-right: -8px;

  &:hover {
    color: #97c2fc;
    font-weight: 600;
    transition: 0.4s;
  }
`;

export const Write = styled.span`
  align-items: center;
  background-color: #97c2fc;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  font-weight: 300;
  height: 50px;
  justify-content: center;
  width: 50px;

  &:hover {
    color: #9cc0d9;
    background-color: white;
    border: 1px solid #97c2fc;
  }
`;

export const WriteDisabled = styled.span`
  align-items: center;
  background-color: #d6d6d6;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  cursor: default;
  display: flex;
  font-weight: 300;
  height: 50px;
  justify-content: center;
  width: 50px;
`;

export const SingleAvatarDefault = styled.div`
  align-items: center;
  background-color: #4946f4;
  border: 1px solid #4946f4;
  border-radius: 50%;
  color: #ffffff;
  cursor: default;
  display: flex;
  font-size: 16px;
  font-weight: 800;
  height: 30px;
  justify-content: center;
  letter-spacing: 2px;
  width: 30px;
`;
