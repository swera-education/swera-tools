import React from 'react';
import { Route } from 'react-router-dom';
import CompoundForm from './CompoundForm';
import SIPForm from './SIPForm';
import LumpsumForm from './LumpsumForm';
import FDForm from './FDForm';
import CompForm from './CompForm';
import PPFForm from './PPFForm';

const Forms = ({match}) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`${match.url}/compound-interest`} component={CompForm} />
      <Route path={`${match.url}/sip-calculator`} component={SIPForm} />
      <Route path={`${match.url}/lumpsum-calculator`} component={LumpsumForm} />
      <Route path={`${match.url}/fd-calculator`} component={FDForm} />
      <Route path={`${match.url}/ppf-calculator`} component={PPFForm} />
      {/* <Route path={`${match.url}/extended-forms`} component={ExtendedForms} />
      <Route path={`${match.url}/validation-forms`} render={props => {
        return <ValidationForms {...props} onSubmit={values => alert(JSON.stringify(values, null, 2))}/>
      }} /> */}
    </div>
  </div>
);

export default Forms;