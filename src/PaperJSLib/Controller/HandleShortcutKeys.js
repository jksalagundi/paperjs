import {editor_store} from "../redux/editor_store";
import {Graph_Editor_Actions} from "../redux/actions/graph_editor_actions";
import {STENCIL_SHAPES} from "../redux/paper_constants";
import {Shape_Actions} from "../redux/actions/shape_actions";

const HandleShortcutKeys = (event) => {
    const {display_style, stencil, graph} = editor_store.getState();
    if (event.modifiers.shift) {
        switch (event.key) {
            case 'down':
                Graph_Editor_Actions.incDecStrokeWidth(-1 * display_style.stroke_width_change);
                break;
            case 'up':
                Graph_Editor_Actions.incDecStrokeWidth(display_style.stroke_width_change);
                break;
            case 'left':
                Graph_Editor_Actions.changeColorIndex(display_style.color_index - 1);
                break;
            case 'right':
                Graph_Editor_Actions.changeColorIndex(display_style.color_index + 1);
                break;
            case 'l':
            case 'L':
                Graph_Editor_Actions.startDrawLine(true);
                break;
            case 'D':
            case 'd':
                Graph_Editor_Actions.startDrawPath(true);
                break;
            case 'R':
            case 'r':
                Graph_Editor_Actions.startDrawSquare(true);
                break;
            case 'T':
            case 't':
                Graph_Editor_Actions.startDrawText(true);
                break;
            case 'C':
            case 'c':
                Graph_Editor_Actions.startDrawCircle(true);
                break;
            case 'P':
            case 'p':
                Graph_Editor_Actions.startDrawPolygon(true);
                break;
            case 'F':
            case 'f':
                break;
            case 'N':
            case 'n':
                //AutoConnectPaths(Paper, paths);
                break;
            case 'v':
            case 'V':
                Graph_Editor_Actions.duplicateSelection();
                break;
            case 'X':
            case 'x':
                Graph_Editor_Actions.deleteSelection();
                break;
            case 'space':
                Graph_Editor_Actions.clearAll();
                break;
            case 'G':
            case 'g':
                Shape_Actions.groupSelections();
                break;
            case 'U':
            case 'u':
                Shape_Actions.unGroupSelections();
                break;
            default:
                break;
        }
    }
    if (stencil && stencil.current_shape === STENCIL_SHAPES.TEXT && graph && graph.current_shape){
        graph.current_shape.addLetter(event);
    }
    event.preventDefault();
    event.stopPropagation();
    // if (controller.brush_mode === BRUSH_MODE.TEXT && text) {
    //     text.addLetter(event.key);
    // }
}

export {HandleShortcutKeys}