import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeContext';
import { lightTheme, darkTheme } from '../Components/Theme';

function Navigation() {
    const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <Navbar
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        padding: '1rem',
      }}
    >
      <Container>
        <Navbar.Brand href="#home">Epic Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
            <NavDropdown title="Altri" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Romanzi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Generi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: theme.background,
              color: theme.text,
              padding: '0.5rem 1rem',
              border: `2px solid ${theme.text}`,
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
           {theme === lightTheme ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
