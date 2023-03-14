import { Box } from '../Box';
import { NavItem, TitleItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home Page' },
  { href: 'tasks', text: 'Tasks' },
  { href: 'about', text: 'About us' },
];
export const AppBar = () => {
  return (
    <Box
      as="header"
      p={4}
      height="30px"
      borderBottom="1px solid #07c"
      display="flex"
      justifyContent="space-between"
      backgroundColor="muted"
    >
      <TitleItem to="/">Tasks</TitleItem>
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
