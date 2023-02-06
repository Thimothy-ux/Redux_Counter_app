import { useSelector , useStore } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import './App.css';





function App() {

  const val =  useStore().getState();
  console.log(val)
  const dispatch = useDispatch();
  const num = useSelector((state) => state.red1.value );


  return (

    <div className="App">
      
      <h1>{num}</h1>
      <button onClick={ () =>  dispatch( { type: "Increment" } )   }    >Increment</button>
      <button onClick={ () =>  dispatch( {  type: "Decrement" } )  }   >Decrement</button>
      <button onClick={ () =>  dispatch( {  type: "Add" , value: val.red1.value } )      }       >Add 10</button>
       
    </div>

  );
}

export default App;
