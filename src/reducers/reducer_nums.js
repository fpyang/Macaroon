import {ANS_NUM} from '../actions/index';
import Immutable from 'immutable';

export default function(state=null, action) {
  const init =   [
      {'num' : 'clear', 'type': 'empty', 'index': 'clear'},
      {'num' : '', 'type': 'normal', 'index': 10},
      {'num' : 'submit', 'type': 'empty', 'index': 'submit'},
      {'num' : '', 'type': 'normal', 'index': 9},
      {'num' : '', 'type': 'normal', 'index': 8},
      {'num' : '', 'type': 'normal', 'index': 7},
      {'num' : '', 'type': 'normal', 'index': 6},
      {'num' : '', 'type': 'normal', 'index': 5},
      {'num' : '', 'type': 'normal', 'index': 4},
      {'num' : '', 'type': 'normal', 'index': 3},
      {'num' : '', 'type': 'normal', 'index': 2},
      {'num' : '', 'type': 'normal', 'index': 1}
    ];

  if (action){
    switch(action.type) {
      case 'ANS_NUM':
        return init;
    }
  }

  return init;
}

function updateNum(state, index, num){
  const newState = state.map(
    function(entry){
      var originalMap = new Map();
      originalMap.set('num', entry.get('num'));
      originalMap.set('type', entry.get('type'));
      originalMap.set('index', entry.get('index'));

      if (entry.get('num') == index){
        originalMap.set('num', num);
      }

      return originalMap;


    }
  );
}
