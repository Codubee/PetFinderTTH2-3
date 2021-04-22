import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';
import '../Navbar.css'


function navbar() {
  return (
    <div>
      <Navbar className="color-nav">
        <Nav>
          <NavbarBrand className="color-text" href="/">Pet Finder</NavbarBrand>
          <NavLink className="color-text" href="/">Matches</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}
export default navbar;