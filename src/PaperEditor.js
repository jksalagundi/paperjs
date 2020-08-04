import React from "react";
import PropTypes from 'prop-types';
import Paper from "paper";
import {COLORS, Colors} from "./PaperJSLib/redux/paper_constants";
import {GraphController} from "./PaperJSLib/Controller/GraphController";

const CANVAS_ID = "paper_js_drawing";
class PaperEditor extends React.Component {
    constructor(props) {
        super(props);
        this._controller = null;
    }

    componentDidMount() {
        const {width, height} = this.props;
        let canvas = document.getElementById(CANVAS_ID);
        if (canvas) {
            Paper.setup(canvas);
            const show_border = (this.props.showBorder || false);
            if (show_border){
                let border_rect = new Paper.Rectangle(new Paper.Point(0, 0), new Paper.Size(width, height));
                let border = new Paper.Path.Rectangle(border_rect);
                border.fillColor = Colors(COLORS.Gray, 100, 0.1);
                border.strokeColor = Colors(COLORS.Red, 500);
                border.strokeWidth = 3.0;
            }
            if (!this._controller){
                this._controller = new GraphController(width,  height);
                this._controller.control();
            }
            Paper.view.draw();
        } else {
            console.warn("Failed to instantiate PaperEditor component, as canvas name could not be found");
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.action_fired !== prevProps.action_fired){
           if (this._controller) this._controller.handle_action(this.props.action_fired);
        }
    }

    render() {
        return (
            <div style={Styles.MainContainer}>
                <canvas id={CANVAS_ID} className={'mx-auto'} width={this.props.width} height={this.props.height}/>
            </div>
        )
    }
}

const Styles = {
    MainContainer : {
        width: '100vw',
        height: '100vh',
        background: '#EEE',
        border: "1px solid #888",
    }
}

PaperEditor.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    showBorder: PropTypes.bool,
    action_fired: PropTypes.object,
}

export {PaperEditor}