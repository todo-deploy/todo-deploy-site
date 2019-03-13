import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

export default () => {
  return (
    <div>
      <Navbar className="justify-content-end" bg="light" expand="lg">
        <Navbar.Brand href="/">todo-deploy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/implementations">Implementations</Nav.Link>
            <Nav.Link href="/contributing">Contributing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}