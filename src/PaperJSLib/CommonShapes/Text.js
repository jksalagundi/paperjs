import Paper from "paper";
import {Shape} from "../Shape/Shape";
import {Colors} from "../redux/paper_constants";

class Text extends Shape {
    constructor(style) {
        super(style, true);
        this.path = null;
        this.content = "text label";
        this.first_letter = true;
    }

    finish(event) {
        let end_point = event.point;
        let color_base = this.getColorBase();

        this.path = new Paper.PointText({
            point: [end_point.x, end_point.y],
            content: this.content,
            fillColor: Colors(color_base, 700),
            fontFamily: 'Roboto',
            fontSize: 18,
        });
        super.finish(event, this.path, false, false);
    }

    changeContent(text) {
        this.path.set({content: text});
    }

    addLetter(event) {
        let str;
        let letter = event.key;
        switch (letter) {
            case 'space':
                str = ' ';
                break;
            case 'ctrl':
            case 'up':
            case 'down':
            case 'left':
            case 'right':
            case 'enter':
            case 'control':
            case 'alt':
            case 'meta':
            case 'caps-lock':
            case 'escape':
            case 'shift':
                break;
            case 'delete':
            case 'backspace':
                if (this.content){
                    let length = this.content.length;
                    // Essentially delete the previous letter...
                    this.content = this.content.substr(0, length - 1);
                    this.path.set({content: this.content});
                }
                break;
            default:
                str = (event.modifiers.shift || event.modifiers.capsLock) ? letter.toUpperCase() : letter;
                break;
        }
        if (str){
            if (this.first_letter) {
                this.content = str;
                this.first_letter = false;
            } else {
                this.content += str;
            }
            this.path.set({content: this.content});
        }
    }
}

export {Text}