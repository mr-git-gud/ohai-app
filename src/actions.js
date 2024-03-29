import {
  SET_REGISTER_EMAIL,
  CHANGE_PASS_FIELD_1,
  CHANGE_PASS_FIELD_2,
  SET_FORM_ERR,
  SET_PASSWORD,
  SET_LOGIN_EMAIL,
  SET_LOGIN_PASSWORD,
  CHANGE_ROUTE,
  SET_SESSION_CREDENTIALS,
  SET_COMPOSE_INPUT,
  SET_IMAGE_URL,
  SET_SFW_SCORE,
  SET_NSFW_SCORE,
  UPLOADING_PENDING,
  UPLOADING_SUCCESS,
  UPLOADING_FAILED,
  CLEAR_IMAGE_TRAY,
  PUSH_POST,
  SET_PM_SID,
  SET_PM_USERNAME,
  SET_CONNECTED_SOCKETS,
  TOGGLE_MODAL,
  SET_SOCKET_FOR_SIGNOUT
} from "./constants";

//Register Page
export const setRegisterEmail = text => ({
  type: SET_REGISTER_EMAIL,
  payload: text
});
export const setPassField1 = text => ({
  type: CHANGE_PASS_FIELD_1,
  payload: text
});
export const setPassField2 = text => ({
  type: CHANGE_PASS_FIELD_2,
  payload: text
});
export const setFormErrMsg = text => ({ type: SET_FORM_ERR, payload: text });
export const setPassword = text => ({ type: SET_PASSWORD, payload: text });

//Signin Page
export const setLoginEmail = text => ({ type: SET_LOGIN_EMAIL, payload: text });
export const setLoginPassword = text => ({
  type: SET_LOGIN_PASSWORD,
  payload: text
});

//Routes
export const changeRoute = text => ({ type: CHANGE_ROUTE, payload: text });

//Session
export const setSessionCredentials = obj => ({
  type: SET_SESSION_CREDENTIALS,
  payload: obj
});

//TSQ

export const setComposeInput = text => ({
  type: SET_COMPOSE_INPUT,
  payload: text
});

export const setImageUrl = text => ({
  type: SET_IMAGE_URL,
  payload: text
});

//IMG Upload

export const setSfwScore = text => ({
  type: SET_SFW_SCORE,
  payload: text
});

export const setNsfwScore = text => ({
  type: SET_NSFW_SCORE,
  payload: text
});

export const uploadImages = formData => dispatch => {
  dispatch({ type: UPLOADING_PENDING });
  fetch(`https://pingim-backend.herokuapp.com/image-upload`, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => dispatch({ type: UPLOADING_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: UPLOADING_FAILED, payload: error }));
};

export const clearImageTray = array => ({
  type: CLEAR_IMAGE_TRAY,
  payload: array
});

export const pushPost = obj => ({
  type: PUSH_POST,
  payload: obj
});

export const setPmSid = text => ({
  type: SET_PM_SID,
  payload: text
});

export const setPmUserName = text => ({
  type: SET_PM_USERNAME,
  payload: text
});

export const setConnectedSockets = array => ({
  type: SET_CONNECTED_SOCKETS,
  payload: array
});

export const toggleModal = boolean => ({
  type: TOGGLE_MODAL,
  payload: boolean
});

export const setSocketForSignOut = obj => ({
  type: SET_SOCKET_FOR_SIGNOUT,
  payload: obj
});
