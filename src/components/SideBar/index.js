import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import Nav from './Nav';

class SideBar extends Component {

  state = {};

  render() {
    let {
      location,
      backgroundColor,
    } = this.props;

    return (
      <div className="sidebar" data-color={backgroundColor}>

        <div className="brand">
          <a href="http://jslancer.com" className="brand-name">
            <img src={'http://jslancer.com/wp-content/uploads/2017/04/js-lancer-logo2-1.png'} alt="logo" className="logo" />
          </a>

        </div>

        <div className="sidebar-wrapper">
          <Nav />
        </div>
        <div
          className="sidebar-background">
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  backgroundColor: state.ThemeOptions.backgroundColor,
});

export default withRouter(
  connect(mapStateToProps)(SideBar)
);