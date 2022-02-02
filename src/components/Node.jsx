import React from "react";
import './node.css'


function node(props) {
    

    function classname() {
        let s = "";
        
        
        if (props.isStart) {
            s += "startNode ";
        } else if (props.isFinish) {
            s += "endNode "
        }else if (props.isWall) {
            s += "node-wall "
        }
        

        return s;
    }

    return <div className={"node " + classname()}
                id = {"node-" + props.row + "-" + props.col} 
                onMouseDown={() => props.onMouseDown(props.row, props.col)}
                onMouseEnter={() => props.onMouseEnter(props.row, props.col)}
                onMouseUp={() => props.onMouseUp(props.row, props.col)}
                >

    </div>
}

export default node;

