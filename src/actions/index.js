export const NUM_SELECTED = 'NUM_SELECTED';
export const ANS_NUM = 'ANS_NUM';
export const OPERATOR = 'OPERATOR';

export function selectedNumBox(num) {
  // selectedNumBox is an ActionCreator, it needs
  // to return an action, an object with a 'type' property

  return {
    type: NUM_SELECTED,
    payload: num
  };
}

export function operator(command) {
  // operator is an ActionCreator, it needs
  // to return an action, an object with a 'type' property
  // There are two commands, i.e., submit and clear

  return {
    type: OPERATOR,
    payload: command
  };
}

//this action creator creates
//the num for selecting index
export function answerNum(index, num) {

  return {
    type: ANS_NUM,
    payload: { 'index': index,
              'num': num
    }
  }
}
