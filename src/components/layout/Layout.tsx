import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Spinner } from '@/components';
import { ApplicationContent } from '@/styled-components';

const Layout = () => {
  return (
    <ApplicationContent>
      <Navbar />
      <Outlet />
      <Footer />
    </ApplicationContent>
  );
};

export default Layout;
