import { initialArg } from "./rootReducer";





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


export default reducerFn;