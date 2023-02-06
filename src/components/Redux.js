import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger'


const initialArg = { value : 0  }

// First Reducer 
function reducerFn(state = initialArg , action)
{

  switch( action.type )
  {
    
    case "Increment" : 
      return { value : state.value + 1 }; 

    case "Decrement" :
      return { value : state.value - 1 };
    
    default :
      return state;

  }
}


// Second Reducer
function reducerFn1(state = initialArg , action)
{
  switch( action.type )
  { 
    
    case "Add" :
      return { value : action.value + 10 };
    default:
      return state;

  }
}



// MiddleWare1
const middleWare = (store) => (next) => (action) =>
{
  // Differentating Reducer_1 and Reducer_2 here.
  if (action.type === "Add") {
    next({ type : action.type , value : store.getState().red1.value });
  }
  else
  {
    next({ type : action.type });
  }
} 




// RootReducer
const reducer = combineReducers({red1 : reducerFn , red2 : reducerFn1});

// Store 
export const store = createStore(reducer,applyMiddleware(middleWare,logger));

