import React from "react"
import {useSelector} from "react-redux";
import {IAppState} from "../../redux/store";
import {ComponentRouter} from "./ComponentRouter";

export const ComponentRenderer = () => {
    const rendererState = useSelector((state) => (state as IAppState).renderer);

    // TODO: Add memoisation
    const builtComponents = Object.values(rendererState.components).map((componentProps: any) => {
        return <ComponentRouter key={"cr_" + componentProps.id}{...componentProps}/>
    });
    console.log("Renderer state: ", rendererState);
    return <>
        {builtComponents}
        </>
}
