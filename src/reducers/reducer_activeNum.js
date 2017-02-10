export default function(state=null, action) {
  if (action){
    switch(action.type) {
      case 'NUM_SELECTED':        
        return action.payload;
    }
  }

  return state;
}
