import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import {Button} from "../Inputs/Button";
import {Box} from "../Layout/Box";

export const ComponentRouter = (props: IComponentBaseProps) => {
    const type = props.component;

    switch (type) {
        case "Button":
            return <Button {...props as any} />
        case "Box":
            return <Box {...props as any} />
    }

    return null;
}
