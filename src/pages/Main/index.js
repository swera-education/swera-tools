import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../reducers/Layout';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
/**
 * Pages
 */
import Finance from '../Finance';
import Conversions from '../Conversions';
import Dashboard from '../Dashboard';


const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
        <div className="close-layer" onClick={hideMobileMenu}></div>
          <Header />
          <div className="main-panel">
          <Route path="/finance" component={Finance} />
          <Route path="/convertor" component={Conversions} />
          <Route path="/" exact>
            <Redirect to="/finance/compound-interest" />
          </Route>
          {/* <Route path="/" component={Dashboard} /> */}
          <Footer />
        </div>
      </div>
    </div>
  )
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));