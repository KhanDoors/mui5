import { Container } from "@mui/material";
// import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
