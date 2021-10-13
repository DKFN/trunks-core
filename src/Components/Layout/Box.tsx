import React from "react";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {IComponentBaseProps} from "../compontentProps";
import {useSelector} from "react-redux";
import {IAppState} from "../../redux/store";

export const Box = (props: IComponentBaseProps) => {
    const maybeParentId = props.position?.parent;
    const parentComponent: any = useSelector((state) => maybeParentId && (state as IAppState).renderer.components[maybeParentId]);

    /** Style */
    const generatedStyle = {
        ...makePositionParams(props.position, parentComponent?.position)
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
