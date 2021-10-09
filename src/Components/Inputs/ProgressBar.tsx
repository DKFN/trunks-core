import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {makeInputClassNames} from "./componentInputHelpers";
import classNames from "classnames";
import {IComponentInputStyleProps} from "./compontentInputProps";

export interface IProgressBarProps extends IComponentBaseProps {
    value?: string | number;
    maxValue?: string | number;
    styling: IComponentInputStyleProps;
}

export const ProgressBar = (props: IProgressBarProps) => {
    /** Style */
    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    const classes = makeInputClassNames(props.styling);

    /** Event routing */
    const onClick = () => sendEvent("onClick", props.id, props.name);
    const onMouseEnter = () => sendEvent("onMouseEnter", props.id, props.name);

    /** Render */
    return <progress
        id={props.id.toString()}
        className={classNames(classes, "progress")}
        style={generatedStyle}
        value={props.value}
        max={props.maxValue || 100}

        onClick={onClick}
        onMouseEnter={onMouseEnter}>
    </progress>;
}
