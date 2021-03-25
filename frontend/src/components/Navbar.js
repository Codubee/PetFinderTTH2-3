import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';

function navbar() {
  return (
    <div>
      <Navbar className="color-nav">
        <Nav>
        <NavbarBrand className ="color-text" href="./views/LandingPage.js">Pet Finder</NavbarBrand>
        <NavLink className="color-text" href="/">Matches</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}
export default navbar;