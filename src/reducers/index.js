import { combineReducers } from 'redux';
import NumsReducer from './reducer_nums';
import ActiveNum from './reducer_activeNum';
import Answer from './reducer_answer';
import Question from './reducer_question';

const rootReducer = combineReducers({
  nums: NumsReducer,
  activeNum: ActiveNum,
  answer: Answer,
  question: Question
});

export default rootReducer;
