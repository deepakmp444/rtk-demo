const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceActions = require("./features/icecream/icecreamSlice").iceActions;

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceActions.ordered());
store.dispatch(iceActions.ordered());
store.dispatch(iceActions.ordered());
store.dispatch(iceActions.restocked(3));

unsubscribe();
