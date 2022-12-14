import styled from 'styled-components';
import { Device } from '@/styled-components';

export const HomePosts = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

export const HomePost = styled.div`
  display: flex;
  gap: 100px;

  @media ${Device.tabletL} {
    flex-direction: column;
  }

  &:nth-child(2n + 1) {
    flex-direction: row-reverse;

    @media ${Device.tabletL} {
      flex-direction: column;
    }
  }
`;

export const HomeImageContent = styled.div`
  flex: 2;
  position: relative;

  &::after {
    content: '';
    background-color: #97c2fc;
    border-radius: 4px;
    height: 100%;
    left: -20px;
    position: absolute;
    top: 20px;
    width: 100%;
    z-index: -1;

    @media ${Device.tabletL} {
      display: none;
    }
  }
`;

export const HomeImage = styled.img`
  border-radius: 4px;
  height: 100%;
  object-fit: cover;
  max-height: 400px;
  width: 100%;
`;

export const HomeContent = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  width: 100%auto;

  @media ${Device.tabletL} {
    padding: 0 20px;
  }
`;

export const HomePostTitle = styled.h1`
  font-size: 48px;
`;

export const HomePostDescription = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const HomeButton = styled.button`
  width: max-content;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: white;
  border: 1px solid #97c2fc;
  border-radius: 4px;
  color: #97c2fc;

  &:hover {
    border: 1px solid white;
    background-color: #97c2fc;
    color: black;
  }
`;
