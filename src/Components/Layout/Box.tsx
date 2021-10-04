import React from "react";
import {makePositionParams} from "../componentHelpers";
import {IComponentBaseProps} from "../compontentProps";

type IButtonProps = IComponentBaseProps;

export const Box = (props: IButtonProps) => {


    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    return <div className="box" id={props.id.toString()} style={generatedStyle}>
    </div>;
}
