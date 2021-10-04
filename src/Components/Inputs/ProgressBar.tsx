import React from "react";
import {IComponentBaseProps} from "../compontentProps";

export interface IProgressBarProps extends IComponentBaseProps {

}

export const ProgressBar = (props: IProgressBarProps) => {
    return <progress className="progress" value="15" max="100"></progress>;
}
