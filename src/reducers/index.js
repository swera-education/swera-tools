import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Layout from './Layout';
import Auth from './Auth';

export default {
  Auth,
  Layout,
  form: formReducer
};