



// Third Reducer
function reducerFn2(state = { type : "none" , movie_title : "None" } , action)
{
  switch( action.type )
  { 
    
    case "REQUEST" :
      return { ...state , loading : true };
    case "SUCCESS" :
      return { loading: false , movie_title : action.data.original_title }  
    case "FAILURE":
      return { loading: false , movie_title : action.data }
    default:
      return state;

  }
}


export default reducerFn2;