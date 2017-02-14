export const NUM_SELECTED = 'NUM_SELECTED';
export const ANS_NUM = 'ANS_NUM';

export function selectedNumBox(num) {
  // selectedNumBox is an ActionCreator, it needs
  // to return an action, an object with a 'type' property

 //console.log('the number is been clicked: ', num.num);

  return {
    type: NUM_SELECTED,
    payload: num
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
