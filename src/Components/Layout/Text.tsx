import React from "react";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {IComponentBaseProps} from "../compontentProps";
import classNames from "classnames";

interface ITextProps extends IComponentBaseProps {
    text: string;
    styling: {
        isTitle?: boolean;
        isSubtitle?: boolean;
    }
}

export const Text = (props: ITextProps) => {
    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    const additionnalStyle = props.position?.height ? {
        fontSize: props.position?.height,
        ...generatedStyle
    } : generatedStyle;

    const classes = classNames({
        'title': props.styling?.isTitle,
        'subtitle': props.styling?.isSubtitle
    })

    const onClick = () => sendEvent("onClick", props.id, props.name);

    return <div
        className={classes}
        onClick={onClick}
        id={props.id.toString()}
        style={additionnalStyle}>
        {props.text}
    </div>
}
