import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '@/components';
import { ApplicationContainer, ApplicationContent } from './styled-components';

const Layout = () => {
  return (
    <ApplicationContainer>
      <ApplicationContent>
        <Navbar />
        <Outlet />
        <Footer />
      </ApplicationContent>
    </ApplicationContainer>
  );
};

export default Layout;
