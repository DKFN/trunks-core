import React from "react";
import {IScriptProps} from "./scriptProps";

export const Stylesheet = (props: IScriptProps) => {
    if (!props.src || !props.content) return null;

    return props.src
        ? <link id={props.id.toString()} rel="stylesheet" href={props.src} />
        : <style id={props.id.toString()}>{props.content}</style>
}
