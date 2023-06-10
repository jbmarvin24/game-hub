import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
