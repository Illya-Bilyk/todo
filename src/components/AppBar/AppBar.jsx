import { Box } from '../Box';
import { NavItem, TitleItem } from './AppBarStyled';

const navItems = [
  { href: '/', text: 'Home Page' },
  { href: 'notes', text: 'Notes' },
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
      <TitleItem to="/">NOTES</TitleItem>
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
