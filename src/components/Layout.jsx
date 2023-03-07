import { Outlet } from 'react-router-dom';
import { Box } from './Box';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <Box display="grid">
      <AppBar />
      <Outlet />
    </Box>
  );
};
