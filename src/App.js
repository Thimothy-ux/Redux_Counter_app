import { useEffect } from 'react'
import { useSelector , useStore } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { getMovies } from './action/ActionCreator';
import './App.css';





function App() {

  
  // const val =  useStore().getState();
  // value: val.red1.value
  // console.log(val)
   // console.log(useStore().getState())

   
  const dispatch = useDispatch();
  const num = useSelector((state) => state.red1.value );


  useEffect( () => 
  {
    dispatch(getMovies())

  }, [] )


 

  return (

    <div className="App">
      
      <h1>{num}</h1>
      <button onClick={ () =>  dispatch( { type: "Increment" } )   }    >Increment</button>
      <button onClick={ () =>  dispatch( {  type: "Decrement" } )  }   >Decrement</button>
      <button onClick={ () =>  dispatch( {  type: "Add"  } )      }       >Add 10</button>
    
    </div>

  );
}

export default App;
