import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";

const middlewares = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducers, middlewares);
