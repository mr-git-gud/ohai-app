import {
  SET_REGISTER_EMAIL,
  CHANGE_PASS_FIELD_1,
  CHANGE_PASS_FIELD_2,
  SET_FORM_ERR,
  SET_PASSWORD,
  SET_LOGIN_EMAIL,
  SET_LOGIN_PASSWORD,
  CHANGE_ROUTE
} from './constants'

const initialRegisterState = {
  email: '',
  setPass1: '',
  setPass2: '',
  formErrMsg: '',
  password: ''
}

export const fillRegisterForm = (state=initialRegisterState, action={}) => {
  switch (action.type) {
    case SET_REGISTER_EMAIL:
      return Object.assign({}, state, {email: action.payload})
    case CHANGE_PASS_FIELD_1:
      return Object.assign({}, state, {setPass1: action.payload})
    case CHANGE_PASS_FIELD_2:
      return Object.assign({}, state, {setPass2: action.payload})
    case SET_FORM_ERR:
      return Object.assign({}, state, {formErrMsg: action.payload})
    case SET_PASSWORD:
      return Object.assign({}, state, {password: action.payload})
    default:
      return state
  }
}

const initialSigninState = {
  signInEmail: '',
  signInPassword: ''
}

export const fillSigninForm = (state=initialSigninState, action={}) => {
  switch (action.type) {
    case SET_LOGIN_EMAIL:
      return Object.assign({}, state, {signInEmail: action.payload});
    case SET_LOGIN_PASSWORD:
      return Object.assign({}, state, {signInPassword: action.payload});
    default:
      return state;
  }
}

const initialRouteState = {
  route: 'signin'
}

export const changeRoute = (state=initialRouteState, action={}) => {
  switch (action.type){
    case CHANGE_ROUTE:
      return Object.assign({}, state, {route: action.payload})
    default:
      return state;
  }
}
