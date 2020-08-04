import Paper from "paper";
import {HandleShortcutKeys} from "./HandleShortcutKeys";
import {Shape_Actions} from "../redux/actions/shape_actions";
import {editor_store} from "../redux/editor_store";

class GraphController {
    constructor() {
        // Tool is the layer needed for PaperJS to convert mouse actions to events, that can be processed.
        this.tool = new Paper.Tool();
    }

    handle_action(action) {
        // Dispatch action, that is received external to the component ( like from a drawing program )
        editor_store.dispatch(action);
    }

    control() {
        this.tool.onMouseDown = (event) => {
            // Graph Reducer will act on this event..
            if (event){
                let shift = (event && event.event && event.event.shiftKey);
                let control = (event && event.event && event.event.ctrlKey);
                if (shift || control) {
                    Shape_Actions.startShape(event);
                }
            }
        }

        this.tool.onMouseDrag = (event) => {
            if (event){
                let shift = (event && event.event && event.event.shiftKey);
                let control = (event && event.event && event.event.ctrlKey);
                if (shift || control) {
                    Shape_Actions.dragShape(event);
                }
            }
        }

        this.tool.onMouseUp = (event) => {
            if (event){
                let shift = (event && event.event && event.event.shiftKey);
                let control = (event && event.event && event.event.ctrlKey);
                if (shift || control) {
                    Shape_Actions.finishShape(event);
                }
            }
        }

        this.tool.onKeyDown = (event) => {
            HandleShortcutKeys(event);
        }
    }
}

export {GraphController}