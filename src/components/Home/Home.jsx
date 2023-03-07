import { HomeItem } from './HomeStyled';
import { Box } from '../Box';

export const Home = () => {
  return (
    <Box
      as="section"
      p={4}
      height="100vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <h1>Home Page</h1>
      <HomeItem to="notes">To notes</HomeItem>
    </Box>
  );
};
