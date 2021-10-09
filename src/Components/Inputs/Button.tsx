import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams, sendEvent} from "../componentHelpers";
import classNames from "classnames";
import {IComponentInputProps, IComponentInputStyleProps} from "./compontentInputProps";
import {makeInputClassNames} from "./componentInputHelpers";


export interface IButtonProps extends IComponentInputProps {
    isLoading?: boolean;
    styling: IComponentInputStyleProps
}

export const Button = (props: IButtonProps) => {

    /** STYLES */
    /* Non bulma styling */
    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    /* Bulma related styling */
    const classes = makeInputClassNames(props.styling);

    /* component specific styling */
    const componentClasses = [
        props.isLoading ? "loading" : ''
    ]

    /** TEXT */

    const text = props.text || '';

    /** Event Routing */
    const onClick = () => sendEvent("onClick", props.id, props.name);
    const onMouseEnter = () => sendEvent("onMouseEnter", props.id, props.name);

    /** Render */
    return <button
        id={props.id.toString()}
        className={classNames("button", classes, componentClasses)}
        style={generatedStyle}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        disabled={props.disabled || false}
    >{text}
    </button>;
}
