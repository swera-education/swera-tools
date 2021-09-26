import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../reducers/Layout';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';

const Header = ({
  toggleMobileNavVisibility
}) => (
    <Navbar fluid={true} className="navStyle">
      <Navbar.Header>
        <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={toggleMobileNavVisibility}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem>
          <div className="brand">
              {/* <img src={swera} alt="logo" className="logoImage" /> */}
              <span className="logoImage"><i className="fa fa-book" style={{'font-size':'25px'}}></i> Swera Techno</span>
          </div>
          </NavItem>
          </Nav>
          <div className="separator"></div>
          <Nav>
          <NavDropdown title={<span className="nav-toggle"><i className="pe-7s-calculator"/>Finance</span>} id="basic-nav-dropdown" className="nav-dropdown">
            <MenuItem><Link to="/finance/compound-interest">Compount Interest Calculator</Link></MenuItem>
            <MenuItem divider />
            <MenuItem><Link to="/finance/sip-calculator">SIP Calcualator</Link></MenuItem>
            <MenuItem divider />
            <MenuItem><Link to="/finance/fd-calculator">FD Calcualator</Link></MenuItem>
            <MenuItem divider />
            <MenuItem><Link to="/finance/lumpsum-calculator">Lumpsum Calcualator</Link></MenuItem>
            <MenuItem divider />
            <MenuItem><Link to="/finance/ppf-calculator">PPF Calcualator</Link></MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem href="https://www.youtube.com/channel/UCStyfvVXwIUAfQb1vwW2GmQ" target="_blank"><i className="fa fa-youtube" style={{color: '#FFF', "font-size":"25px"}}></i></NavItem>
          <NavItem href="https://www.facebook.com/SweRa-Education-104252292006741" target="_blank"><i className="fa fa-facebook" style={{color: '#FFF', "font-size":"25px"}}></i></NavItem>
          <NavItem href="https://twitter.com/swera_tech?s=09" target="_blank"><i className="fa fa-twitter" style={{color: '#FFF', "font-size":"25px"}}></i></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default  withRouter(connect(null, mapDispatchToProp)(Header));