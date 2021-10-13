import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams, sendEvent} from "../componentHelpers";
import classNames from "classnames";
import {IComponentInputProps, IComponentInputStyleProps} from "./compontentInputProps";
import {makeInputClassNames} from "./componentInputHelpers";
import {useSelector} from "react-redux";
import {IAppState} from "../../redux/store";


export interface IButtonProps extends IComponentInputProps {
    isLoading?: boolean;
    styling: IComponentInputStyleProps
}

export const Button = (props: IButtonProps) => {
    const maybeParentId = props.position?.parent;
    const parentComponent: any = useSelector((state) => maybeParentId && (state as IAppState).renderer.components[maybeParentId]);

    /** STYLES */
    /* Non bulma styling */
    const generatedStyle = {
        ...makePositionParams(props.position, parentComponent?.position)
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
        disabled={props.disabled || false}

        onClick={onClick}
        onMouseEnter={onMouseEnter}
    >{text}
    </button>;
}
