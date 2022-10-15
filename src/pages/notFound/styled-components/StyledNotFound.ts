import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  align-items: center;
  background: #dadada;
  background: -moz-linear-gradient(top, #dadada 0%, #a1a9a8 50%, #dadada 100%);
  background: -webkit-linear-gradient(
    top,
    #dadada 0%,
    #a1a9a8 50%,
    #dadada 100%
  );
  background: linear-gradient(to bottom, #dadada 0%, #a1a9a8 50%, #dadada 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
`;

export const NotFoundTitle = styled.h1`
  font-size: 6rem;
  text-shadow: 3px 3px 8px #ffffff;
`;

export const NotFoundLink = styled.span`
  color: blue;
  font-size: 2rem;
`;

export const Image = styled.img``;
