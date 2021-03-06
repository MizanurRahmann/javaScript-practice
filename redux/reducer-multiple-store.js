const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redu.combineReducer;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//"ACTION CREATOR" that return a action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
function buyIceCreme(){
    return {
        type: BUY_ICECREAM,
    }
}


//REDUCER FUNCTION (previousState, action) => newState
const initialCakeState = { numOfCakes: 10 }
const initialIceCreameState = { numOfIcecreame: 20  }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, //asking reducer first copy the object then update with new changes
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreameReducer = (state = initialIceCreameState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state, //asking reducer first copy the object then update with new changes
            numOfIcecreame: state.numOfIcecreame - 1
        }
        default: return state
    }
}


//REDUX STORE
//combine two reducer using combineReducer into rootReducer
const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCreame: iceCreameReducer
})
//now create a store with this rootReducer
const store = createStore(rootReducer);

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreme());
store.dispatch(buyIceCreme());
unsubscribe();