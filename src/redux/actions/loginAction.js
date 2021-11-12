export const SET_TOKEN = 'SET_TOKEN';
export const SET_CHECK = 'SET_CHECK';
export const SET_END_CHECK = 'SET_END_CHECK';
export const set_token = (props)=> ({ type: SET_TOKEN,payload: props  });
export const set_check = (props)=>({type:SET_CHECK,payload:props});
export const set_end_check = (props)=>({type:SET_END_CHECK,payload:props});