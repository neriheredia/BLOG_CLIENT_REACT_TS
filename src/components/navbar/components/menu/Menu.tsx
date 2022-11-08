import React from 'react';
import { MenuContainer, MenuLine } from './styled-components';

interface LineProps {
  lineStatus: boolean;
  setActive: Function;
  children?: React.ReactNode;
}

const Menu = ({ lineStatus = false, setActive, children }: LineProps) => {
  const handleActive = (active: boolean) => {
    setActive(!active);
  };

  return (
    <MenuContainer
      borderVisible={lineStatus}
      onClick={() => handleActive(lineStatus)}
    >
      <MenuLine lineOne={lineStatus} />
      <MenuLine lineTwo={lineStatus} top />
      <MenuLine lineThree={lineStatus} top />
      {lineStatus && <div style={{ height: '100vh' }}>{children}</div>}
    </MenuContainer>
  );
};

export default Menu;
