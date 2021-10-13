import React from "react";
import {IComponentInputProps, IComponentInputStyleProps} from "./compontentInputProps";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {useSelector} from "react-redux";
import {IAppState} from "../../redux/store";

export interface ICheckboxProps extends IComponentInputProps {
    text?: string;
    value?: boolean;
    styling: IComponentInputStyleProps;
}

// TODO Finish the checkbox implementation
export const Checkbox = (props: ICheckboxProps) => {
    const maybeParentId = props.position?.parent;
    const parentComponent: any = useSelector((state) => maybeParentId && (state as IAppState).renderer.components[maybeParentId]);

    /** STYLES */
    /* Non bulma styling */
    const generatedStyle = {
        ...makePositionParams(props.position, parentComponent.position)
    };

    /** Event routing */
    const onClick = () => sendEvent("onClick", props.id, props.name);
    const onMouseEnter = () => sendEvent("onMouseEnter", props.id, props.name);
    const onChange = (event: any) => {
        const checked = event.target.checked;
        sendEvent("onChange", props.id, props.name, checked);
    };

    /** Render */
    return <label className="checkbox" style={generatedStyle}>
        <input
            type="checkbox"
            disabled={props.disabled || false}
            checked={props.value || false}

            onChange={onChange}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        />
        {props.text}
    </label>
}
