/**
 * This component, helps define how a shape should behave on mouse actions.
 * Tweak this component, after understanding thoroughly, how should the behavior be defined as
 */
import {Shape_Actions} from "../redux/actions/shape_actions";
import {Colors} from "../redux/paper_constants";
import Paper from "paper";

export const create_shape_behaviour = (path_obj, shape_obj, color_base, scale_factor) => {
    path_obj.onClick = () => {
        path_obj.selected = !path_obj.selected;
        if (path_obj.selected) Shape_Actions.selectShape(shape_obj);
        if (!path_obj.selected) Shape_Actions.deSelectShape(shape_obj);
    }
    path_obj.onMouseEnter = () => {
        path_obj.shadowColor = Colors(color_base, 700, 0.5);
        path_obj.shadowBlur = 10;
        path_obj.shadowOffset = new Paper.Point(5, 5);
    }

    path_obj.onMouseLeave = () => {
        path_obj.shadowColor = null;
        path_obj.shadowBlur = 0;
        path_obj.shadowOffset = null;
    }

    path_obj.onDoubleClick = () => {
        if (path_obj) Shape_Actions.deleteShape(shape_obj);
        path_obj.remove();
    }

    path_obj.onMouseDrag = (event) => {
        if (event.modifiers.meta || event.modifiers.ctrl){
            let delta = event.delta;
            // Based on movement direction and delta, either shrink or grow the shape by scale_factor.
            if (delta && (delta.x < 0 || delta.y < 0)){
                path_obj.scale( 1 - scale_factor);
            } else {
                path_obj.scale(1 + scale_factor);
            }
        } else {
            path_obj.position = event.point;
        }
    }
}