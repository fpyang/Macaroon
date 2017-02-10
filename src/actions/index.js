export function selectedNumBox(num) {
  // selectedNumBox is an ActionCreator, it needs
  // to return an action, an object with a 'type' property

 //console.log('the number is been clicked: ', num.num);

  return {
    type: 'NUM_SELECTED',
    payload: num
  };
}
