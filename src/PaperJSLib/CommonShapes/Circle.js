import Paper from "paper";
import {Shape} from "../Shape/Shape";

class Circle extends Shape {
    constructor(style){
        super(style, true);
    }
    
    finish(event) {
        let end_point = event.point;
        let start_point = super.getStartPoint();
        let radius = Math.max(Math.abs(end_point.x - start_point.x), Math.abs(end_point.y - start_point.y)) ;
        super.finish(event, new Paper.Path.Circle(start_point, radius));
    }
}

export {Circle}