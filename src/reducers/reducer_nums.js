import {ANS_NUM, OPERATOR} from '../actions/index';
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
    if (state == null){
      return init;
    }else{
      switch(action.type) {
        case ANS_NUM:
          var {index, num } = action.payload;
          const updatedState = updateNum(state, index, num);
          return updatedState;
       case OPERATOR:
         switch(action.payload){
           case 'submit':
             submit(state);
             break;
           case 'clear':
             return clear(state);
           default:
             break;
         }
      }
    }

  }

  return state;
}

function updateNum(state, index, num){
  const newState = state.map(
    function(entry){
      var originalMap = {};
      originalMap['num'] =  entry['num'];
      originalMap['type'] = entry['type'];
      originalMap['index'] = entry['index'];
      if (entry['index'] == index.toString()){
        originalMap['num'] = num;
      }
      return originalMap;
    }
  );

  return newState;
}

function submit(state){
  console.log('You submit the answer');
  console.log(state);
  console.log('TODO: check the answer~');
}

function clear(state){
  const newState = state.map(
    function(entry){
      var emptyMap = {};
      if ((entry['num'] == 'submit') || (entry['num'] == 'clear')){
        emptyMap['num'] = entry['num'];
      }else{
        emptyMap['num'] =  '';
      }
      emptyMap['type'] = entry['type'];
      emptyMap['index'] = entry['index'];
      return emptyMap;
    }
  );

  return newState;
}
