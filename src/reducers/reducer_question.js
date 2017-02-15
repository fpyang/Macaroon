import {FETCH_QUESTION} from '../actions/index';

export default function(state=null, action) {
  if (action){
    switch(action.type) {
      case 'FETCH_QUESTION':     
        return action.payload;
    }
  }

  return state;
}
