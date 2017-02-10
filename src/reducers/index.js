import { combineReducers } from 'redux';
import NumsReducer from './reducer_nums';
import ActiveNum from './reducer_activeNum';
import Answer from './reducer_answer';

const rootReducer = combineReducers({
  nums: NumsReducer,
  activeNum: ActiveNum,
  answer: Answer
});

export default rootReducer;
