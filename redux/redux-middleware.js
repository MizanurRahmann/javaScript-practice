/*Middleware: Provides a third party extension point between dispatching an action,
and the moment it reaches the reducer. */

const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


//"ACTION CREATOR"
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


//REDUCER FUNCTION
const initialCakeState = { numOfCakes: 10 }
const initialIceCreameState = { numOfIcecreame: 20  }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreameReducer = (state = initialIceCreameState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreame: state.numOfIcecreame - 1
        }
        default: return state
    }
}


//REDUX STORE

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: iceCreameReducer
})
//now create a store with this rootReducer
const store = createStore(rootReducer, applyMiddleWare(logger));

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreme());
store.dispatch(buyIceCreme());
unsubscribe();