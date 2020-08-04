import {STENCIL_SHAPES} from "../../paper_constants";
import {COMMON_SHAPES} from "../../../CommonShapes/CommonShapes";
import {get_current_style} from "../../selectors/get_style";

const handle_shape_start = (state) => {
    const {stencil} = state;
    const shape_style = get_current_style(state);
    let newShape = null;
    switch (stencil.current_shape) {
        case STENCIL_SHAPES.FREE_DRAW:
            newShape = new COMMON_SHAPES.FreeHandLine(shape_style, true);
            break;
        case STENCIL_SHAPES.DRAW_LINE:
            newShape = new COMMON_SHAPES.Line(shape_style, true);
            break;
        case STENCIL_SHAPES.SQUARE:
            newShape = new COMMON_SHAPES.Rectangle(shape_style, true);
            break;
        case STENCIL_SHAPES.CIRCLE:
            newShape = new COMMON_SHAPES.Circle(shape_style, true);
            break;
        case STENCIL_SHAPES.TEXT:
            newShape = new COMMON_SHAPES.Text(shape_style, true);
            break;
        case STENCIL_SHAPES.POLYGON:
            newShape = new COMMON_SHAPES.Polygon(shape_style, true);
            break;
        case STENCIL_SHAPES.ROUNDED_RECTANGLE:
            //TBD
            break;

    }
    return newShape;
}

export {handle_shape_start}