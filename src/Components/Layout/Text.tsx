import React from "react";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {IComponentBaseProps} from "../compontentProps";
import classNames from "classnames";

interface ITextProps extends IComponentBaseProps {
    text: string;
    styling: {
        isTitle?: boolean;
        isSubtitle?: boolean;
        size?: number;
    }
}

export const Text = (props: ITextProps) => {
    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    const size = 'is-'+props.styling?.size;
    const classes = classNames({
        'title': props.styling?.isTitle,
        'subtitle': props.styling?.isSubtitle,
        [size]: props.styling?.size
    })

    const onClick = () => sendEvent("onClick", props.id, props.name);

    return <div className={classes} onClick={onClick} id={props.id.toString()} style={generatedStyle}>
        {props.text}
    </div>
}
