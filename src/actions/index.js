import axios from 'axios'

export const NUM_SELECTED = 'NUM_SELECTED';
export const ANS_NUM = 'ANS_NUM';
export const OPERATOR = 'OPERATOR';
export const FETCH_QUESTION = 'FETCH_QUESTION';

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

export function fetchQuestion(qid){

  const url = `http://localhost:5000/question/${qid}`;
  let question = {};

  const request = axios.get(url);
                  /*
                  .then(function (response) {
                    //console.log('backend response: ');
                    question = response.data.results;
                    //console.log(question);
                  })
                  .catch(function (error) {
                    //console.log(error);
                  });*/
  return {
    type: FETCH_QUESTION,
    payload: request
  }
}
