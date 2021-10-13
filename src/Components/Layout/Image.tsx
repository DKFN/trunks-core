import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams, sendEvent} from "../componentHelpers";
import {useSelector} from "react-redux";
import {IAppState} from "../../redux/store";

interface IImageProps extends IComponentBaseProps {
    src: string;
}

export const Image = (props: IImageProps) => {
    const maybeParentId = props.position?.parent;
    const parentComponent: any = useSelector((state) => maybeParentId && (state as IAppState).renderer.components[maybeParentId]);

    if (!props.src) return null;

    /** STYLES */
    /* Non bulma styling */
    const generatedStyle = {
        ...makePositionParams(props.position, parentComponent?.position)
    };


    /** Event routing */
    const onClick = () => sendEvent("onClick", props.id, props.name);
    const onMouseEnter = () => sendEvent("onMouseEnter", props.id, props.name);

    /** Render */
    return <img
        src={props.src}
        style={generatedStyle}
        height={props.position?.height}
        width={props.position?.width}

        onClick={onClick}
        onMouseEnter={onMouseEnter}
    />;
}
