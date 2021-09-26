import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  // if (!values.initialBalance) {
  //   errors.initialBalance = 'Initial Balance is required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
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
      initialBalance: 0,
      currency: '₹',
      interestInterval: 1,
      compoundInterval: 1,
      regularInterval: 1,
      regularDeposit: 0,
      annualIncrement: 0,
      isBeginning: 'true'
    }
  }
}

let CompForm = ({
  submitting,
  handleSubmit,
  submitForm,
  currencyValue,
  toNotDisable
}) => (
  <div className="card">
    <div className="header" style={{textAlign:'center'}}>
      <h3>Compound Interest Calculator</h3>
    </div>
    <div className="content">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <form className="calculator-form" onSubmit={handleSubmit}>
          <div className="form-group calculator-field currency-box" style={{'padding-top': '20px'}}>
            <label for="currency" className="control-label">Currency:</label>
            <span className="radio-switch">
            <Field type="radio" id="radio-one" name="currency" label="₹" value="₹" component={renderField}/>
            <Field type="radio" id="radio-two" name="currency" label="$" value="$" component={renderField}/>
            <Field type="radio" id="radio-three" name="currency" label="£" value="£" component={renderField}/>
            <Field type="radio" id="radio-four" name="currency" label="€" value="€" component={renderField}/>
            <Field type="radio" id="radio-five" name="currency" label="¥" value="¥" component={renderField}/>
            <Field type="radio" id="radio-five" name="currency" label="₩" value="₩" component={renderField}/>
            <Field type="radio" id="radio-five" name="currency" label="₪" value="₪" component={renderField}/>
            </span>
            <span className="clearElement"></span>
          </div>
            <div className="form-group calculator-field">
              <label className="control-label">Initial Balance ({currencyValue})</label>
              <Field
                name="initialBalance"
                type="number"
                component={renderField} />
            </div>

            <div className="row calculator-field">
              <div className="col-md-12 form-group">
                <label className="control-label">Interest Rate (%) *</label>
                <Field
                  name="interestRate"
                  type="number"
                  component={renderField} />
              </div>
            </div>

            <div className="row calculator-field">
              <div className="col-md-6 form-group">
                <label className="control-label">Years *</label>
                <Field
                  name="tenureYears"
                  type="number"
                  placeholder="0"
                  component={renderField} />
              </div>
              <div className="col-md-6 form-group drop-select">
                <label className="control-label">Compounding</label>
                <Field
                  name="compoundInterval"
                  type="select"
                  component="select">
                  <option value={1}>Yearly</option>
                  <option value={2}>Half-Yearly</option>
                  <option value={4}>Quarterly</option>
                  <option value={12}>Monthly</option>
                </Field>
              </div>
            </div>

            <div className="row calculator-field">
              <div className="col-md-6 form-group">
                <label className="control-label">Regular Deposit ({currencyValue})</label>
                <Field
                  name="regularDeposit"
                  type="number"
                  component={renderField} />
              </div>
              <div className="col-md-6 form-group drop-select">
                <label className="control-label">&nbsp;</label>
                <Field
                  name="regularInterval"
                  type="select"
                  component="select">
                  <option value={1}>Yearly</option>
                  <option value={2}>Half-Yearly</option>
                  <option value={4}>Quarterly</option>
                  <option value={12}>Monthly</option>
                </Field>
              </div>
            </div>
            <div className="form-group calculator-field currency-box" style={{'padding-top': '20px'}}>
              <label for="currency" className="control-label">Deposits made at what point in period:</label>
              <span className="radio-switch radio-div-50">
                <Field type="radio" id="radio-six" name="isBeginning" label="Beginning" value="true" component={renderField}/>
                <Field type="radio" id="radio-seven" name="isBeginning" label="End" value="false" component={renderField}/>
              </span>
              <span className="clearElement"></span>
            </div>

            <div className="form-group calculator-field">
              <label className="control-label">Annual increase in contribution (%) </label>
              <Field
                name="annualIncrement"
                type="number"
                component={renderField} />
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

CompForm = reduxForm({
  form: 'CompForm',
  validate
})(CompForm)
const selector = formValueSelector('CompForm')
CompForm = connect(state => {
  const currencyValue = selector(state, 'currency')
  const initialBalanceValue = selector(state, 'initialBalance')
  const regularDepositValue = selector(state, 'regularDeposit')
  const interestRateValue = selector(state, 'interestRate')
  const tenureYearsValue = selector(state, 'tenureYears')
  let toNotDisable = initialBalanceValue > 0 || regularDepositValue > 0
  toNotDisable = toNotDisable && (interestRateValue > 0 && tenureYearsValue > 0)
  return {
    currencyValue,
    toNotDisable
  }
})(CompForm)

export default connect(mapStateToProps)(CompForm)
