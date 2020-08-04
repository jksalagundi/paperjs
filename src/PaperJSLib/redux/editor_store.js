import {createStore, applyMiddleware, combineReducers} from "redux";
import {createLogger} from "redux-logger";
import {Display_Style_Reducer} from "./reducers/display_style_reducer";
import {Stencils_Reducer} from "./reducers/stencils_reducer";
import {Graph_Reducer} from "./reducers/graph_reducer";

const middleware = applyMiddleware(createLogger());

const root_reducer = combineReducers ({
    display_style : Display_Style_Reducer,
    stencil : Stencils_Reducer,
    graph: Graph_Reducer,
});

const editor_store = createStore(root_reducer, middleware);

export {editor_store}