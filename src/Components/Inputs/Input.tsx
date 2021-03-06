import React from "react";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {makeInputClassNames} from "./componentInputHelpers";
import {IComponentInputProps, IComponentInputStyleProps} from "./compontentInputProps";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {IAppState} from "../../redux/store";

export interface IInputProps extends IComponentInputProps {
    isLoading?: boolean;
    styling: IComponentInputStyleProps
}

export const Input = (props: IInputProps) => {
    const maybeParentId = props.position?.parent;
    const parentComponent: any = useSelector((state) => maybeParentId && (state as IAppState).renderer.components[maybeParentId]);

    /** Style */
    const generatedStyle = {
        ...makePositionParams(props.position, parentComponent?.position)
    };

    const classes = makeInputClassNames(props.styling);

    const componentClasses = [
        props.isLoading ? "loading" : ""
    ]

    /** Event Routing */
    const onClick = () => sendEvent("onClick", props.id, props.name);
    const onMouseEnter = () => sendEvent("onMouseEnter", props.id, props.name);
    const onFocus = () => sendEvent("onFocus", props.id, props.name);
    const onBlur = () => sendEvent("onBlur", props.id, props.name);
    const onChange = (e: any) => {
        const value = e.target.value;
        sendEvent("onChange", props.id, props.name, value);
    }
    const onKeyDown = (e: any) => {
        const proxySendEvent = (eventName: string) => sendEvent(eventName, props.id, props.name);
        const value = e.key
        switch (value) {
            case "Enter":
                proxySendEvent("onEnter"); break;
            case "Escape":
                proxySendEvent("onEscape"); break;
        }
    }

    /** Render */
    return <div className="control" style={generatedStyle}>
        <input
            id={props.id.toString()}
            className={classNames(classes, "input", componentClasses)}
            type="text"
            placeholder={props.text || ''}
            disabled={props.disabled || false}

            onChange={onChange}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
        />
    </div>;
}
