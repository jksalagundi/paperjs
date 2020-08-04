import {GRAPH_EDITOR_ACTIONS} from "../actions/action_types";
import {COLORS, colors} from "../paper_constants";

const Initial_State = {
    width: 500,
    height : 500,
    stroke_width : 3.0,
    font_size : 16,
    fill_opacity : 0.3,
    stroke_width_change : 0.5,
    stroke_style : "",
    color_base : COLORS.Gray,
    color_index : 0,
}

const Display_Style_Reducer = (state = Initial_State, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case GRAPH_EDITOR_ACTIONS.SET_DIMENSIONS:
            /** Expects payload to be of dimensions type { width, height } **/
            if (action.payload){
                newState.width = action.payload.width;
                newState.height= action.payload.height;
            }
            break;
        case GRAPH_EDITOR_ACTIONS.CHANGE_STROKE_WIDTH:
            newState.stroke_width = Number(action.payload);
            break;
        case GRAPH_EDITOR_ACTIONS.INC_DEC_STROKE_WIDTH:
            // Payload should contain width change (+ve or -ve)
            newState.stroke_width += Number(action.payload);
            break;
        case GRAPH_EDITOR_ACTIONS.CHANGE_STROKE_STYLE:
            newState.stroke_style = action.payload;
            break;
        case GRAPH_EDITOR_ACTIONS.CHANGE_COLOR_THEME:
            // Base color code has be passed. Look at COLORS to specify base color palette
            newState.color_base= action.payload;
            break;
        case GRAPH_EDITOR_ACTIONS.CHANGE_COLOR_INDEX:
            // Base color index has be passed. Look at Colors array to specify base color palette
            newState.color_index= Number(action.payload);
            if (newState.color_index < 0 || newState.color_index > colors.length){
                newState.color_index = 0;
            }
            newState.color_base = colors[newState.color_index];
            break;
    }
    return newState;
}

export {Display_Style_Reducer}