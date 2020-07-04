const redux = require('redux');
const createStore = redux.createStore;

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
        info: 'first redux action'
    }
}
//REDUCER FUNCTION (previousState, action) => newState
const initialState = { 
    numOfCakes: 10,
    numOfIcecreame: 20
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, //asking reducer first copy the object then update with new changes
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return{
            ...state, //asking reducer first copy the object then update with new changes
            numOfIcecreame: state.numOfIcecreame - 1
        }
        default: return state
    }
}

//REDUX STORE
const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreme());
store.dispatch(buyIceCreme());
unsubscribe();