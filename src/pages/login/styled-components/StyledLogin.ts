import styled from 'styled-components';
import { Device } from '@/styled-components';

export const LoginContainer = styled.div`
  align-items: center;
  background-image: url('https://fondosdepantallaymuchomas.files.wordpress.com/2011/12/just4you_smar_freebie5.jpg');
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const LoginBox = styled.div`
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 50px;
  width: 20%;

  @media ${Device.tabletS} {
    width: 80%;
  }
`;

export const LoginTitle = styled.h1`
  color: #fafafa;
  font-size: 60px;
  letter-spacing: 4px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 4px #000000;
`;

export const LoginSpan = styled.span`
  font-size: 13px;
  margin-top: 4px;
  text-align: center;

  span:hover {
    color: #6b94c9;
  }
`;
