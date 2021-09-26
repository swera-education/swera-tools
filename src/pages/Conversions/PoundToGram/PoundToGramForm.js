import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    initialValues: {
      inputPounds: 0,
      roundOff: 2
    }
  }
}

let PoundToGramForm = ({
  submitting,
  handleSubmit,
  submitForm,
  currencyValue,
  toNotDisable
}) => (
  <div className="card">
    <div className="header" style={{textAlign:'center'}}>
      <h3>Pound to Gram Ounce</h3>
    </div>
    <div className="content">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <form className="calculator-form" onSubmit={handleSubmit}>
            <div className="form-group calculator-field">
              <label className="control-label">Enter grams you want to convert:</label>
              <Field
                name="inputPounds"
                type="number"
                component={renderField} />
            </div>
            <div className="form-group calculator-field currency-box">
                <label for="currency" className="control-label mg-b-0">Round (Decimal places)</label>
                <span className="radio-switch">
                  <Field type="radio" id="radio-one" name="roundOff" label="1" value={1} component={renderField}/>
                  <Field type="radio" id="radio-two" name="roundOff" label="2" value={2} component={renderField}/>
                  <Field type="radio" id="radio-three" name="roundOff" label="3" value={3} component={renderField}/>
                  <Field type="radio" id="radio-four" name="roundOff" label="4" value={4} component={renderField}/>
                </span>
                <span className="clearElement"></span>
            </div>
            <div className="submit-button">
              <button type="submit" className="btn btn-fill btn-info" disabled={!toNotDisable || submitting}>Calculate</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

PoundToGramForm = reduxForm({
  form: 'PoundToGramForm',
  validate
})(PoundToGramForm)
const selector = formValueSelector('PoundToGramForm')
PoundToGramForm = connect(state => {
  const inputPounds = selector(state, 'inputPounds')
  let toNotDisable = inputPounds > 0
  return {
    toNotDisable
  }
})(PoundToGramForm)

export default connect(mapStateToProps)(PoundToGramForm)
