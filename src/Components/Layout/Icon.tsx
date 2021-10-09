import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import classNames from "classnames";
import {makeInputClassNames} from "../Inputs/componentInputHelpers";
import {makePositionParams, sendEvent} from "../componentHelpers";
import _ from "lodash";

interface IIConProps extends IComponentBaseProps {
    icon?: string;
}

export const Icon = (props: IIConProps) => {
    if (!props.icon) return null;

    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    const additionnalStyle = props.position?.height ? {
        fontSize: props.position?.height,
        ...generatedStyle
    } : generatedStyle;

    /** Event Routing */
    const onClick = () => sendEvent("onClick", props.id, props.name);
    const onMouseEnter = () => sendEvent("onMouseEnter", props.id, props.name);

    return <span className="icon" id={props.id.toString()} style={additionnalStyle} onClick={onClick} onMouseEnter={onMouseEnter}>
        <i className={classNames("fa", props.icon)}></i>
    </span>
}
