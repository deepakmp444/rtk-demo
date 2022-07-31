const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceActions = require("./features/icecream/icecreamSlice").iceActions;
const fetchUsers = require("./features/users/userSlice").fetchUsers;

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceActions.ordered());
// store.dispatch(iceActions.ordered());
// store.dispatch(iceActions.ordered());
// store.dispatch(iceActions.restocked(3));

// unsubscribe();
