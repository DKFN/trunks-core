import React from "react";
import {makePositionParams} from "./componentHelpers";
import {IComponentBaseProps} from "./compontentProps";

type IButtonProps = IComponentBaseProps;

export const Box = (props: IButtonProps) => {


    const generatedStyle = {
        ...makePositionParams(props.positioning)
    };

    return <div className="box" style={generatedStyle}>
    </div>;
}
