import axios from 'axios'

export const FETCH_QUESTION = 'FETCH_QUESTION'

export function fetchQuestion(qid){
  const url = `http://localhost:5000/question/`${qid}
  let question = {};

  const request = axios.get(url)
                  .then(function (response) {
                    console.log('backend response: ');
                    question = response.data.results;
                    console.log(question);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
  return {
    type: FETCH_QUESTION,
    payload: request
  }
}
