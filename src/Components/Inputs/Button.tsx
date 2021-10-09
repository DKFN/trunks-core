import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams, sendEvent} from "../componentHelpers";
import classNames from "classnames";
import {IComponentInputStyleProps} from "./compontentInputProps";
import {makeInputClassNames} from "./componentInputHelpers";


export interface IButtonProps extends IComponentBaseProps {
    text?: string;
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

    /** TEXT */

    const text = props.text || '';

    /** Event Routing */
    const onClick = () => sendEvent("onClick", props.id, props.name);
    const onMouseEnter = () => sendEvent("onMouseEnter", props.id, props.name);

    return <button
        id={props.id.toString()}
        className={classNames("button", classes)}
        style={generatedStyle}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
    >{text}
    </button>;
}
