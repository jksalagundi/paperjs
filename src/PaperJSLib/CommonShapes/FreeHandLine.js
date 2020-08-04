import Paper from "paper";
import {Shape} from "../Shape/Shape";

class FreeHandLine extends Shape {
    constructor(style) {
        super(style, true);
    }
    start(event) {
        super.start(event);
        this.path = new Paper.Path();
        this.path.add(event.point);
    }

    drag(event) {
        super.drag(event, true);
        this.path.add(event.point);
    }

    finish(event) {
        this.path.add(event.point);
        super.finish(event, this.path, false);
    }
}

export {FreeHandLine}