import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
