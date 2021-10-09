import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import {IComponentInputStyleProps} from "./compontentInputProps";

export interface ICheckboxProps extends IComponentBaseProps {
    text?: string;
    styling: IComponentInputStyleProps
}
export const Checkbox = (props: ICheckboxProps) => {

    return <label className="checkbox">
        <input type="checkbox" />
        {props.text}
    </label>
}
