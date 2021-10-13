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
import {Icon} from "../Layout/Icon";
import {Image} from "../Layout/Image";
import {Checkbox, ICheckboxProps} from "../Inputs/Checkbox";
import {SimpleAlert} from "../Alerts/SimpleAlert";
import {ConfirmCancelAlert} from "../Alerts/ConfirmCancelAlert";
import {QueryAlert} from "../Alerts/QueryAlert";

const ComponentRouter = (props: IComponentBaseProps) => {
    const type = props.component;

    switch (type) {
        case "Button":
            return <Button {...props as IButtonProps} />
        case "Box":
            return <Box {...props as IComponentBaseProps} />
        case "Checkbox":
            return <Checkbox {...props as ICheckboxProps} />
        case "Input":
            return <Input {...props as IInputProps} />
        case "ProgressBar":
            return <ProgressBar {...props as IProgressBarProps} />
        case "Text":
            return <Text {...props as any} />
        case "Icon":
            return <Icon {...props as any} />
        case "Image":
            return <Image {...props as any} />
        case "SimpleAlert":
            return <SimpleAlert {...props as any}/>
        case "ConfirmAlert":
            return <ConfirmCancelAlert {...props as any} />
        case "QueryAlert":
            return <QueryAlert {...props as any} />
        case "Javascript":
            return <Javascript {...props as IScriptProps}/>
        case "Stylesheet":
            return <Stylesheet {...props as IScriptProps}/>
    }
    return <TrunksError message={"Component "+ type + " does not exist"} entity={props} />;
}

export default React.memo(ComponentRouter)
