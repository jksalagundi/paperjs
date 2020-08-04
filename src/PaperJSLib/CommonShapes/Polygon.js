import Paper from "paper";
import {Shape} from "../Shape/Shape";

class Polygon extends Shape {
    constructor(style, n_sides=5){
        super(style, true);
        this.n_sides = n_sides;
    }

    finish(event) {
        let end_point = event.point;
        let start_point = super.getStartPoint();
        let radius = Math.max(Math.abs(end_point.x - start_point.x), Math.abs(end_point.y - start_point.y)) ;
        super.finish(event, new Paper.Path.RegularPolygon(start_point, this.n_sides, radius));
    }
}

export {Polygon}