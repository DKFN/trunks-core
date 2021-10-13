import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {makeInputClassNames} from "./componentInputHelpers";
import classNames from "classnames";
import {IComponentInputStyleProps} from "./compontentInputProps";
import {useSelector} from "react-redux";
import {IAppState} from "../../redux/store";

export interface IProgressBarProps extends IComponentBaseProps {
    value?: string | number;
    maxValue?: string | number;
    styling: IComponentInputStyleProps;
}

export const ProgressBar = (props: IProgressBarProps) => {
    const maybeParentId = props.position?.parent;
    const parentComponent: any = useSelector((state) => maybeParentId && (state as IAppState).renderer.components[maybeParentId]);

    /** Style */
    const generatedStyle = {
        ...makePositionParams(props.position, parentComponent?.position)
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
