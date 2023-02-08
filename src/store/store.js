import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import middleWare from "../middleware/Middleware";
import rootReducer from "../reducer/rootReducer";



// Store 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(middleWare,thunk,logger)));

export default store;