import { combineReducers, createStore } from "redux";


const initialArg = { value : 0  }


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



const reducer = combineReducers({red1 : reducerFn , red2 : reducerFn1});

export const store = createStore(reducer);

