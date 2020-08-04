import {GRAPH_EDITOR_ACTIONS} from "../actions/action_types";
import {STENCIL_SHAPES} from "../paper_constants";

const Initial_State = {
    current_shape: STENCIL_SHAPES.FREE_DRAW,
    tool_min_distance: 0,
};

const Stencils_Reducer = (state = Initial_State, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case GRAPH_EDITOR_ACTIONS.DRAW_SQUARE:
            newState.current_shape = STENCIL_SHAPES.SQUARE;
            newState.tool_min_distance = 20;
            break;
        case GRAPH_EDITOR_ACTIONS.DRAW_POLYGON:
            newState.current_shape = STENCIL_SHAPES.POLYGON;
            newState.tool_min_distance = 20;
            break;
        case GRAPH_EDITOR_ACTIONS.DRAW_TEXT:
            newState.current_shape = STENCIL_SHAPES.TEXT;
            newState.tool_min_distance = 0;
            break;
        case GRAPH_EDITOR_ACTIONS.DRAW_CIRCLE:
            newState.current_shape = STENCIL_SHAPES.CIRCLE;
            newState.tool_min_distance = 5;
            break;
        case GRAPH_EDITOR_ACTIONS.DRAW_PATH:
            newState.current_shape = STENCIL_SHAPES.FREE_DRAW;
            newState.tool_min_distance = 0;
            break;
        case GRAPH_EDITOR_ACTIONS.DRAW_LINE:
            newState.current_shape = STENCIL_SHAPES.DRAW_LINE;
            newState.tool_min_distance = 5;
            break;
        default:
            break;
    }
    return newState;
}

export {Stencils_Reducer}