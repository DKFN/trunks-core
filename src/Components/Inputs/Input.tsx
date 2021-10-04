import React from "react";
import {IComponentBaseProps} from "./compontentProps";

interface IIunputProps extends IComponentBaseProps {

}

export const Input = (props: IIunputProps) => {

    
    return <input className="input" type="text" placeholder="Text input" />;
}
