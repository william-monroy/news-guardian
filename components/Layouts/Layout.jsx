import { Box } from "../Layouts/Box.jsx";
import NavBar from "../NavBar.jsx";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    <NavBar />
    {children}
  </Box>
);
