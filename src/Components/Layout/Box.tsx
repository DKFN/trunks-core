import React from "react";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {IComponentBaseProps} from "../compontentProps";

export const Box = (props: IComponentBaseProps) => {
    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    const onClick = () => sendEvent("onClick", props.id, props.name);

    return <div className="box" onClick={onClick} id={props.id.toString()} style={generatedStyle}>
    </div>;
}
