import styled from 'styled-components';
import { Device } from '@/styled-components';

export const RegisterContainer = styled.div`
  align-items: center;
  background-image: url('https://fondosdepantallaymuchomas.files.wordpress.com/2011/12/just4you_smar_freebie5.jpg');
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const RegisterBox = styled.div`
  background-color: #eeeeee;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 20%;

  @media ${Device.tabletS} {
    width: 80%;
  }
`;

export const RegisterTitle = styled.h1`
  color: #fafafa;
  font-size: 60px;
  letter-spacing: 4px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 4px #000000;
`;

export const RegisterSpan = styled.span`
  font-size: 13px;
  margin-top: 10px;
  text-align: center;

  span:hover {
    color: #6b94c9;
  }
`;
