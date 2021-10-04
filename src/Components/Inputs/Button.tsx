import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams} from "../componentHelpers";
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
    const sendEvent = (eventType: string, payload?: any) => {
        window.TRUNKS.sendEvent(eventType, {
            id: props.id,
            name: props?.name,
        })
    }

    const onClick = (e: any) => sendEvent("onClick");
    const onHover = console.log;

    return <button
        id={props.id.toString()}
        className={classNames("button", classes)}
        style={generatedStyle}
        onClick={onClick}
    >{text}
    </button>;
}
