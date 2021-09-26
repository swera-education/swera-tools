import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-note2"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className={this.isPathActive('/finance') || this.state.financeMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ financeMenuOpen: !this.state.financeMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-calculator"></i>
            <p>Finance <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.financeMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/finance/compound-interest') ? 'active' : null}>
                  <Link to="/finance/compound-interest">Compount Interest</Link>
                </li>
                <li className={this.isPathActive('/finance/sip-calculator') ? 'active' : null}>
                  <Link to="/finance/sip-calculator">SIP Calcualator</Link>
                </li>
                <li className={this.isPathActive('/finance/lumpsum-calculator') ? 'active' : null}>
                  <Link to="/finance/lumpsum-calculator">Lumpsum Calcualator</Link>
                </li>
                <li className={this.isPathActive('/finance/fd-calculator') ? 'active' : null}>
                  <Link to="/finance/fd-calculator">FD Calcualator</Link>
                </li>
                <li className={this.isPathActive('/finance/ppf-calculator') ? 'active' : null}>
                  <Link to="/finance/ppf-calculator">PPF Calcualator</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        {/* <li className={this.isPathActive('/convertor') || this.state.convertorMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ convertorMenuOpen: !this.state.convertorMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Conversions <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.convertorMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/convertor/gram-to-pound') ? 'active' : null}>
                  <Link to="/convertor/gram-to-pound">Grams To Pounds</Link>
                </li>
                <li className={this.isPathActive('/finance/sip-calculator') ? 'active' : null}>
                  <Link to="/finance/sip-calculator">SIP Calcualator</Link>
                </li>
                <li className={this.isPathActive('/finance/lumpsum-calculator') ? 'active' : null}>
                  <Link to="/finance/lumpsum-calculator">Lumpsum Calcualator</Link>
                </li>
                <li className={this.isPathActive('/finance/fd-calculator') ? 'active' : null}>
                  <Link to="/finance/fd-calculator">FD Calcualator</Link>
                </li>
                <li className={this.isPathActive('/finance/ppf-calculator') ? 'active' : null}>
                  <Link to="/finance/ppf-calculator">PPF Calcualator</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li> */}
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);