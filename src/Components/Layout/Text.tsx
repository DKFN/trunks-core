import React from "react";
import {makePositionParams} from "./componentHelpers";
import {IComponentBaseProps} from "./compontentProps";
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
        ...makePositionParams(props.positioning)
    };

    const size = 'is-'+props.styling.size;
    const classes = classNames({
        'title': props.styling.isTitle,
        'subtitle': props.styling.isSubtitle,
        [size]: props.styling.size
    })

    return <div className={classes} style={generatedStyle}>
        {props.text}
    </div>
}
