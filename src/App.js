import { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { getMovies } from './action/Async_ActionCreator';
import Counter from './components/counter_ui';
import './App.css';



function App() 
{

  
  // const val =  useStore().getState();
  // value: val.red1.value
  // console.log(val)
  // console.log(useStore().getState())

   
  const dispatch = useDispatch();



  useEffect( () => 
  {

    dispatch(getMovies())

  }, [] )


 

  return (

    <div className="App">

      <Counter/> 
      
    </div>

  );


}

export default App;

