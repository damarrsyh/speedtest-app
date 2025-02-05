import { Navbar, Container, Button } from 'react-bootstrap';

const AppNavbar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className={`navbar-custom ${sidebarOpen ? 'expanded' : 'collapsed'}`}>
      <Container fluid>
        <Navbar.Brand href="#" className="ms-3">Nav</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
