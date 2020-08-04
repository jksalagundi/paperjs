import {editor_store} from "../editor_store";

// const get_current_style = () => {
//     const {display_style} = editor_store.getState();
//     if (!display_style) {
//         console.warn("Redux state is not managed appropriately. Cannot start drawing shapes");
//         return;
//     }
//     return {
//         colorBase: display_style.color_base,
//         fillOpacity: display_style.fill_opacity,
//         strokeWidth: display_style.stroke_width
//     }
// }

const get_current_style = (state) => {
    const {display_style} = state ;
    if (!display_style) {
        console.warn("Redux state is not managed appropriately. Cannot start drawing shapes");
        return;
    }
    return {
        colorBase: display_style.color_base,
        fillOpacity: display_style.fill_opacity,
        strokeWidth: display_style.stroke_width
    }
}
export {get_current_style}
