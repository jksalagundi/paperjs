import {SHAPE_ACTIONS} from "./action_types";
import {editor_store} from "../editor_store";

const startShape = (event) => {
    editor_store.dispatch({ type: SHAPE_ACTIONS.START_SHAPE, payload:{event: event, state: editor_store.getState()} });
}

const dragShape = (event) => {
    editor_store.dispatch({ type: SHAPE_ACTIONS.DRAG_SHAPE, payload:event });
}

const finishShape = (event) => {
    editor_store.dispatch({ type: SHAPE_ACTIONS.FINISH_DRAWING_SHAPE, payload:event });
}

const selectShape = (shape) => {
    editor_store.dispatch({ type: SHAPE_ACTIONS.SELECT_SHAPE, payload:shape});
}

const deSelectShape = (shape) => {
    editor_store.dispatch({ type: SHAPE_ACTIONS.DESELECT_SHAPE, payload:shape});
}

const deleteShape= (shape) => {
    editor_store.dispatch({ type: SHAPE_ACTIONS.DELETE_SHAPE, payload:shape});
}

const groupSelections = () => {
    editor_store.dispatch({ type: SHAPE_ACTIONS.GROUP_SELECTED_SHAPES, payload:null});
}

const unGroupSelections = () => {
    editor_store.dispatch({ type: SHAPE_ACTIONS.UNGROUP_SELECTED_SHAPES, payload:null});
}

export const Shape_Actions = {
    startShape, dragShape, finishShape, selectShape, deleteShape, deSelectShape, groupSelections, unGroupSelections
};