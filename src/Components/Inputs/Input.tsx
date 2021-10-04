import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams} from "../componentHelpers";
import {makeInputClassNames} from "./componentInputHelpers";
import {IComponentInputStyleProps} from "./compontentInputProps";
import classNames from "classnames";

interface IIunputProps extends IComponentBaseProps {
    text?: string;
    styling: IComponentInputStyleProps
}

export const Input = (props: IIunputProps) => {
    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    const classes = makeInputClassNames(props.styling);
    return <div className="control" style={generatedStyle}>
        <input id={props.id.toString()} className={classNames(classes, "input")} type="text" placeholder={props.text || ''}/>
    </div>;
}
