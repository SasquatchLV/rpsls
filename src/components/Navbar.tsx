import { Container, Nav, Navbar as NavBarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <NavBarBs sticky="top" className="bg-white shadow-sm mb-3 p-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/game" as={NavLink}>
            Game
          </Nav.Link>
        </Nav>
      </Container>
    </NavBarBs>
  )
}
