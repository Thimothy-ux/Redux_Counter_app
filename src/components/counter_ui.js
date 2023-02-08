import { useDispatch, useSelector } from "react-redux";



const Counter = () =>
{

    
    const dispatch = useDispatch();
    const num = useSelector((state) => state.red1.value );

    return (
         <>
            <h1>{num}</h1>
            <button onClick={ () =>  dispatch( { type: "Increment" } )   }    >Increment</button>
            <button onClick={ () =>  dispatch( {  type: "Decrement" } )  }   >Decrement</button>
            <button onClick={ () =>  dispatch( {  type: "Add"  } )      }       >Add 10</button>
    
         </>
    )
}



export default Counter;