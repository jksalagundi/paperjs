import {SHAPE_ACTIONS, GRAPH_EDITOR_ACTIONS} from "../actions/action_types";
import {handle_shape_start} from "./helpers/start_shape_helper";
import {Group} from "../../Shape/Group";
import _ from "lodash";
import {get_current_style} from "../selectors/get_style";

const InitialState = {
    shapes: [], // Holds all shapes that are drawn on the graph paper
    selected: [], // Currently selected shapes
    grouped: [], // Currently grouped shapes
    connectors: [], // Connectors connecting shapes
    current_shape: null,
}

export const Graph_Reducer = (state = InitialState, action) => {
    let newState = Object.assign({}, state);
    let event, shape;
    switch (action.type) {
        case SHAPE_ACTIONS.START_SHAPE:
            // Payload has {event, state}
            if (action.payload && action.payload.hasOwnProperty('event') && action.payload.hasOwnProperty('state')) {
                event = action.payload.event;
                if (event) {
                    newState.current_shape = handle_shape_start(action.payload.state);
                    if (newState.current_shape) {
                        newState.current_shape.start(event);
                        newState.shapes.push(newState.current_shape);
                    }
                }
            }
            break;
        case SHAPE_ACTIONS.DRAG_SHAPE:
            event = action.payload;
            if (newState.current_shape) newState.current_shape.drag(event);
            break;
        case SHAPE_ACTIONS.FINISH_DRAWING_SHAPE:
            event = action.payload;
            if (newState.current_shape) newState.current_shape.finish(event);
            break;
        case GRAPH_EDITOR_ACTIONS.CLEAR_ALL:
            if (newState.shapes) {
                newState.shapes.map((shape) => shape.remove());
            }
            newState = Object.assign({}, InitialState);
            break;
        case SHAPE_ACTIONS.DELETE_SHAPE:
            shape = action.payload;
            if (shape && shape.getID()) {
                // Though the shape is removed from graph,paper, we need to remove it from our internal state
                _.remove(newState.shapes, (item) => {
                    return item.getID() === shape.getID()
                });
                _.remove(newState.selected, (item) => {
                    return item.getID() === shape.getID()
                });
            }
            break;
        case SHAPE_ACTIONS.SELECT_SHAPE:
            newState.selected.push(action.payload);
            break;
        case SHAPE_ACTIONS.DESELECT_SHAPE:
            shape = action.payload;
            if (shape && shape.getID()) {
                // Though the shape is removed from graph,paper, we need to remove it from our internal state
                _.remove(newState.selected, (item) => {
                    return item.getID() === shape.getID()
                });
            }
            break;
        case GRAPH_EDITOR_ACTIONS.CUT:
            // This action will remove all selected shapes... ( Different from DELETE_SHAPE ).
            state.selected.map((shape)=>{
                _.remove(newState.shapes, (item)=>{return item.getID() === shape.getID()});
                if (shape) shape.remove();
            });
            newState.selected = [];
            break;
        case GRAPH_EDITOR_ACTIONS.COPY:
            // This action will remove all selected shapes... ( Different from DELETE_SHAPE ).
            state.selected.map((shape)=>{
                newState.shapes.push(shape.clone());
            });
            break;
        case SHAPE_ACTIONS.GROUP_SELECTED_SHAPES:
            if (state.selected && state.selected.length > 0){
                let group = new Group(get_current_style(), state.selected);
                if (group) group.define_behavior();
                newState.shapes.push(group);
                newState.selected = [];
            } else {
                console.warn("No shapes selected for grouping... ");
            }
            break;

    }
    return newState;
}