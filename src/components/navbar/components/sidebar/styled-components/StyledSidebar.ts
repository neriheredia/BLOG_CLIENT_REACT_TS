import styled from 'styled-components';

interface StyledProps {
  spacing?: number;
}

export const SidebarContainer = styled.div`
  background-color: #f7f4f4;
  border-right: 1px solid #000000;
  border-radius: 0px 4px 4px 0px;
  box-shadow: 1px 1px 8px 0px #000000;
  height: 100vh;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 80%;
  z-index: 2;
`;

export const SidebarLinks = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0;
  width: 100%;
`;

export const SidebarLink = styled.h6`
  color: #97c2fc;
  font-weight: 600;
  font-size: 20px;
  margin: 5px 0;
  margin-bottom: ${({ spacing }: StyledProps) => `${spacing}px`};
`;

export const SidebarAvatar = styled.div`
  align-items: center;
  background-color: #f7f4f4;
  border: 1px solid #97c2fc;
  border-radius: 50%;
  color: #97c2fc;
  cursor: default;
  display: flex;
  font-size: 28px;
  font-weight: 800;
  height: 70px;
  justify-content: center;
  letter-spacing: 2px;
  width: 70px;
`;
