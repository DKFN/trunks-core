import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {makeInputClassNames} from "./componentInputHelpers";
import {IComponentInputStyleProps} from "./compontentInputProps";
import classNames from "classnames";

export interface IInputProps extends IComponentBaseProps {
    text?: string;
    styling: IComponentInputStyleProps
}

export const Input = (props: IInputProps) => {
    /* Style */
    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    const classes = makeInputClassNames(props.styling);

    /* Event Routing */
    const onClick = () => sendEvent("onClick", props.id, props.name);
    const onChange = (e: any) => {
        const value = e.target.value;
        sendEvent("onChange", props.id, props.name, value);
    }

    /* Render */
    return <div className="control" style={generatedStyle}>
        <input
            id={props.id.toString()}
            className={classNames(classes, "input")}
            type="text"
            placeholder={props.text || ''}
            onChange={onChange}
            onClick={onClick}
        />
    </div>;
}
