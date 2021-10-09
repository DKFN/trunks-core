import React from "react";
import {IScriptProps} from "./scriptProps";

export const Javascript = (props: IScriptProps) => {
    if (!props.src || !props.content) return null

    return props.src
        ? <script id={props.id.toString()} type="text/javascript" src={props.src} />
        : <script id={props.id.toString()} type="text/javascript">{props.content}</script>
}
