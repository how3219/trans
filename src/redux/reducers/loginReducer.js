import {    
  SET_TOKEN,
  SET_CHECK,
  SET_END_CHECK
} from '../actions/loginAction';

const initialState = {
  apptoken:'',  
  check:false,
  endcheck:false,
};

export default function LoginReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case SET_TOKEN:
      return {
        ...state,
        apptoken:payload.token
      }
      case SET_CHECK:
        return{
          ...state,
          check:payload.check
        }
        case SET_END_CHECK:
        return{
          ...state,
          endcheck:payload.endcheck
        }
    default:
      return state;
  }
}
