import Paper from "paper";
import {Shape} from "../Shape/Shape";

class Line extends Shape {
    constructor(style) {
        super(style, true);
    }
    finish(event) {
        let end_point = event.point;
        let start_point = super.getStartPoint();
        super.finish(event, new Paper.Path.Line(start_point, end_point), false);
    }
}

export {Line}