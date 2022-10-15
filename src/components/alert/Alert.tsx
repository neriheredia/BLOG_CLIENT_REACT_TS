import React from 'react';
import styled from 'styled-components';
import { green, red, yellow } from '@mui/material/colors';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Portal } from '@/hook';

interface Props {
  error?: boolean | undefined;
  setShowAlert?: any;
  showAlert: boolean | undefined;
  text?: string;
  warning?: boolean | undefined;
}

const AlertContainer: any = styled.div`
  animation: fadeIn 1s ease;
  align-items: center;
  background-color: ${({ onError, warning }: any) => {
    if (onError) return red.A200;
    if (warning) return yellow[200];
    return green.A200;
  }};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  padding: 10px;
  position: absolute;
  right: 40px;
  top: ${({ top }: any) => top};
  z-index: 999;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const AlertText = styled.a`
  font-family: Nunito Sans Regular;
  font-size: 16px;
  line-height: 18px;
  margin-left: 8px;
`;

export const Alert = ({
  error = false,
  setShowAlert,
  showAlert,
  text = '',
  warning = false,
}: Props) => {
  if (!showAlert) return null;
  setTimeout(() => {
    setShowAlert(false);
  }, 5000);

  return (
    <Portal>
      <AlertContainer
        onError={error || null}
        top={`${window.scrollY + 80}px`}
        warning={warning}
      >
        {warning || error ? <PriorityHighIcon /> : <DoneAllIcon />}
        <AlertText>{text}</AlertText>
      </AlertContainer>
    </Portal>
  );
};

export default Alert;
