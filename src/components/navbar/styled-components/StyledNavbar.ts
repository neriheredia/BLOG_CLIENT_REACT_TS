import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 50px;
`;

export const Links = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const Titles = styled.h6`
  font-size: 16px;
  font-weight: 300;
`;

export const UserState = styled.span`
  cursor: pointer;
`;

export const Write = styled.span`
  align-items: center;
  background-color: #b9e7e7;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  font-weight: 300;
  height: 50px;
  justify-content: center;
  width: 50px;

  &:hover {
    color: teal;
    background-color: white;
    border: 1px solid teal;
  }
`;
