import styled from 'styled-components';

interface StyleLine {
  lineOne?: boolean;
  lineTwo?: boolean;
  lineThree?: boolean;
  borderVisible?: boolean;
  top?: boolean;
}

export const MenuContainer = styled.div`
  border: ${({ borderVisible }: StyleLine) =>
    borderVisible ? 'none' : '3px solid #97c2fc'};
  border-radius: ${({ borderVisible }: StyleLine) =>
    borderVisible ? 'none' : '4px'};
  cursor: pointer;
  height: 25px;
  padding: 2px;
  width: 30px;
`;

export const MenuLine = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background: #97c2fc;
  margin-top: ${({ top }) => (top ? '6px' : '4px')};
  transform-origin: 0px 100%;
  transition: all 300ms;
  transform: ${({ lineOne, lineThree }: StyleLine) => {
    if (lineOne) return `rotate(45deg) translate(-2px, 1px)`;
    if (lineThree) return `rotate(-45deg) translate(-4px, 2px)`;
    return 'none';
  }};
  opacity: ${({ lineTwo }: StyleLine) => (lineTwo ? '0' : 'none')};
  margin-left: ${({ lineTwo }: StyleLine) => (lineTwo ? '-30px' : 'none')};
`;
