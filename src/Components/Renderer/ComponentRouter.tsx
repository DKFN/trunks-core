import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import {Button, IButtonProps} from "../Inputs/Button";
import {Box} from "../Layout/Box";
import {IInputProps, Input} from "../Inputs/Input";
import {IProgressBarProps, ProgressBar} from "../Inputs/ProgressBar";
import {TrunksError} from "../TrunksError";
import {Text} from "../Layout/Text";
import {Javascript} from "../Scripts/Javascript";
import {IScriptProps} from "../Scripts/scriptProps";
import {Stylesheet} from "../Scripts/Stylesheet";

const ComponentRouter = (props: IComponentBaseProps) => {
    const type = props.component;

    switch (type) {
        case "Button":
            return <Button {...props as IButtonProps} />
        case "Box":
            return <Box {...props as IComponentBaseProps} />
        case "Input":
            return <Input {...props as IInputProps} />
        case "ProgressBar":
            return <ProgressBar {...props as IProgressBarProps} />
        case "Text":
            return <Text {...props as any} />
        case "Javascript":
            return <Javascript {...props as IScriptProps}/>
        case "Stylesheet":
            return <Stylesheet {...props as IScriptProps}/>
    }
    return <TrunksError message={"Component "+ type + " does not exist"} entity={props} />;
}

export default React.memo(ComponentRouter)
