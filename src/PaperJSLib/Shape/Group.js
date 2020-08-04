import {create_shape_behaviour} from "./Shape_Behavior";
import {Shape} from "./Shape";
import Paper from "paper";

class Group extends Shape {
    /**
     * @param style
     * @param shapes -- Array of shape objects
     */
    constructor(style, shapes){
        super(style, false);
        if (!shapes) {
            console.warn("Failed to create group shape, as no shapes are passed for grouping");
            throw Error('Invalid call to Group Constructor, as no shapes are passed for grouping');
        }
        let children = [];
        shapes.map((shape) => {
            if (shape) children.push(shape.getPath());
        })
        this.group = new Paper.Group(children);
    }

    define_behavior(){
        create_shape_behaviour(this.group,  this,  super.getColorBase(), super.getScaleFactor());
    }
}

export {Group}