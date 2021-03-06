import React from 'react';
import { Route } from 'react-router-dom';
import GramToPound from './GramToPound';

const Conversions = ({match}) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`${match.url}/gram-to-pound`} component={GramToPound} />
      {/* <Route path={`${match.url}/extended-forms`} component={ExtendedForms} />
      <Route path={`${match.url}/validation-forms`} render={props => {
        return <ValidationForms {...props} onSubmit={values => alert(JSON.stringify(values, null, 2))}/>
      }} /> */}
    </div>
  </div>
);

export default Conversions;