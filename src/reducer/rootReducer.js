import { combineReducers } from "redux";
import reducerFn from "./reducerFn1";
import reducerFn1 from "./reducerFn2";
import reducerFn2 from "./reducerFn3";


export const initialArg = { value : 0  }

// RootReducer
const rootReducer = combineReducers({red1 : reducerFn , red2 : reducerFn1 , red3 : reducerFn2 });

export default rootReducer;