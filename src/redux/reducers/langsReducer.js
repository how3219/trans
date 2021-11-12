import {
    SET_LANGS
} from '../actions/langsActions';

const initialState = {
    langs:'ko'
};

export default function LangsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_LANGS:
        return {
          ...state,
          langs:payload.langs
        }
      
      default:
        return state;
    }
  }
