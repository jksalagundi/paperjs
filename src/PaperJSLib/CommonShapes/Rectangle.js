import Paper from "paper";
import {Shape} from "../Shape/Shape";

class Rectangle extends Shape {
    constructor(style) {
        super(style, true);
    }
    finish(event) {
        let end_point = event.point;
        let start_point = super.getStartPoint();
        super.finish(event, new Paper.Path.Rectangle(start_point, end_point));
    }
}

export {Rectangle}