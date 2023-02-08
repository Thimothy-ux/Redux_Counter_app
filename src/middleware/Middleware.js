



// MiddleWare1
const middleWare = (store) => (next) => (action) =>
{

  // Differentating Reducer_1 and Reducer_2 here.
  if (action.type === "Add") {

    next({ type : action.type , value : store.getState().red1.value });

  }
  else if( action.type === "Movie" ) 
  {

    next({ type : action.type , data : action.data } );

  }
  else 
  {

    next( action )
  
  }
} 

export default middleWare;