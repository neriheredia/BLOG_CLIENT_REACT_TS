import styled from 'styled-components';
import { GridLoader } from 'react-spinners';

const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  backdrop-filter: blur(5px);
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 1024px;
  z-index: 99;
`;

const SpinnerContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 400px;
`;

const Titles = styled.h6`
  color: #00376b;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: 4px;
`;

interface SpinnerProps {
  color?: string;
  isVisible: boolean;
  size?: number;
  text?: string;
}

const Spinner = ({
  color = '#217cf2',
  isVisible = false,
  size = 25,
  text = '',
}: SpinnerProps) => {
  return (
    <>
      {isVisible && (
        <SpinnerContainer>
          <SpinnerContent>
            <GridLoader color={color} size={size} />
            <Titles>{text.length && text}</Titles>
          </SpinnerContent>
        </SpinnerContainer>
      )}
    </>
  );
};
export default Spinner;
