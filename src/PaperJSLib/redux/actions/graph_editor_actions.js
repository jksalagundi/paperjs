import {GRAPH_EDITOR_ACTIONS} from "./action_types";
import {editor_store} from "../editor_store";

const startDrawSquare = (shown) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.DRAW_SQUARE, payload: shown});
}

const startDrawCircle = (shown) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.DRAW_CIRCLE, payload: shown});
}

const startDrawPath = (shown) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.DRAW_PATH, payload: shown});
}

const startDrawLine = (shown) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.DRAW_LINE, payload: shown});
}
const startDrawText = (shown) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.DRAW_TEXT, payload: shown});
}
const startDrawPolygon = (shown) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.DRAW_POLYGON, payload: shown});
}
const setCanvasDimensions = (dim) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.SET_DIMENSIONS, payload: dim});
}
const clearAll = () => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.CLEAR_ALL, payload: null});
}
const startChangeTheme = (flag) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.CHANGE_THEME, payload: flag});
}
const copy = (flag) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.COPY, payload: flag});
}
const changeStrokeStyle = (dashStyle) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.CHANGE_STROKE_STYLE, payload: dashStyle});
}
const changeStrokeWidth = (width) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.CHANGE_STROKE_WIDTH, payload: width});
}
const incDecStrokeWidth = (widthChange) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.INC_DEC_STROKE_WIDTH, payload: widthChange});
}

const changeColorTheme = (baseColor) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.CHANGE_COLOR_THEME, payload: baseColor});
}

const changeColorIndex= (index) => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.CHANGE_COLOR_INDEX, payload: index});
}

const connectShapes = () => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.CONNECT_SHAPES, payload: null});
}

const duplicateSelection = () => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.COPY, payload: null});
}

const deleteSelection = () => {
    editor_store.dispatch({type: GRAPH_EDITOR_ACTIONS.CUT, payload: null});
}

export const Graph_Editor_Actions = {
    startDrawPolygon, startDrawCircle, startDrawText, startDrawPath, startDrawSquare, startDrawLine,
    startChangeTheme, clearAll, changeColorIndex, changeColorTheme, incDecStrokeWidth, connectShapes,
    setCanvasDimensions, changeStrokeWidth, changeStrokeStyle, duplicateSelection, deleteSelection,
}
