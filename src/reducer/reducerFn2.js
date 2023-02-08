import { initialArg } from "./rootReducer";






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

export default reducerFn1;
