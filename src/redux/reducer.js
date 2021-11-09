import axios from 'axios';

const LOAD_GREETING = 'LOAD_GREETING';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';

const initialState = { greeting: {} };

const loadGreeting = (payload) => ({
  type: LOAD_GREETING,
  payload,
});

const loadSuccess = (payload) => ({
  type: LOAD_SUCCESS,
  payload,
});

const loadFail = (payload) => ({
  type: LOAD_FAIL,
  payload,
});

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GREETING:
      return { ...state };
    case LOAD_SUCCESS:
      return { greeting: action.payload };
    case LOAD_FAIL:
      return { ...state };

    default:
      return state;
  }
};

const endPoint = 'http://127.0.0.1:3000/api/v1/hello';

const fetchGreeting = () => (dispatch) => {
  dispatch(loadGreeting());
  axios
    .get(`${endPoint}`)
    .then((response) => {
      if (response.data !== '') {
        dispatch(loadSuccess(response.data));
      }
    })
    .catch(() => {
      dispatch(loadFail());
    });
};

export { greetingReducer, fetchGreeting };
