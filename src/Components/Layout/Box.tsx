import React from "react";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {IComponentBaseProps} from "../compontentProps";

export const Box = (props: IComponentBaseProps) => {
    /** Style */
    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    /** Event Routing */
    const onClick = () => sendEvent("onClick", props.id, props.name);
    const onMouseEnter = () => sendEvent("onMouseEnter", props.id, props.name);

    /** Routing */
    return <div
        className="box"
        id={props.id.toString()}
        style={generatedStyle}

        onClick={onClick}
        onMouseEnter={onMouseEnter}>
    </div>;
}
