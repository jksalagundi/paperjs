import Paper from "paper";
import {COLORS, Colors} from "../redux/paper_constants";
import _ from "lodash";
import {create_shape_behaviour} from "./Shape_Behavior";

class Shape {
    /**
     * Points are to be of Paper.Point objects
     * Style should be an object of { colorBase,  fillOpacity, strokeWidth }
     * @param style
     * @param show_brush
     */
    constructor(style, show_brush = false) {
        // If style is not specified, it will default to these... blue, 0.3 opacity and strokewidth 1.0
        this.color_base = (style && style.colorBase || 'blue');
        this.fill_opacity = (style && style.fillOpacity || '0.3');
        this.stroke_width = (style && style.strokeWidth || 1.0);

        this.start_point = null;
        this.show_brush = show_brush;
        this.brush = null;
        this.scale_factor = 0.02;
    }

    /**
     * All shapes must implement start method
     * @param event
     */
    start(event) {
        this.start_point = event.point;
        if (this.show_brush) {
            this.brush_start = event.point;
            this.brush = new Paper.Path.Line(this.brush_start, this.brush_start);
            this.brush.strokeColor = Colors(COLORS.Gray, 400);
            this.brush.strokeWidth = 1.0;
            this.brush.dashArray = [5, 5];
        }
    }


    /**
     * This handles display of brush being dragged
     * @param event
     * @param free_hand
     */
    drag(event, free_hand = false) {
        if (this.brush) {
            if (!free_hand) this.brush.removeSegment(1);
            this.brush.add(event.point);
        }
    }



    /**
     * Finish drawing the rectangle
     * @param event
     * @param paper_object
     * @param fill
     * @param stroke
     */
    finish(event, paper_object, fill = true, stroke = true) {
        this.path = paper_object;
        if (stroke) this.path.strokeColor = Colors(this.color_base, 500);
        if (fill) this.path.fillColor = Colors(this.color_base, 100, this.fill_opacity);
        this.path.strokeWidth = this.stroke_width;

        // This segregation is needed, to replicate behavior on cloned objects.
        create_shape_behaviour(this.path,  this, this.color_base, this.scale_factor);
        if (this.brush) this.brush.remove();
    }


    getStartPoint() {
        return this.start_point;
    }

    getColorBase() {
        return this.color_base;
    }

    getStrokeWidth() {
        return this.stroke_width;
    }

    getScaleFactor(){
        return this.scale_factor
    }

    getPath() {
        return this.path
    };

    getID(){
        if (this.path) return this.path.id;
    }

    remove() {
        if (this.path) this.path.remove();
        if (this.brush) this.brush.remove();
    }

    clone(){
        let cloned_object = _.cloneDeep(this);
        cloned_object.path = [];
        cloned_object.path = this.path.clone();
        // Move the cloned object 5 points away on x & y axis..
        cloned_object.path.position.x += 5;
        cloned_object.path.position.y += 5;
        create_shape_behaviour(cloned_object.path, cloned_object,
            cloned_object.color_base, cloned_object.scale_factor);
        return cloned_object;
    }

}

export {Shape}