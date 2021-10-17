import React from "react";
import {IComponentBaseProps} from "../compontentProps";
import {makePositionParams, sendEvent} from "../componentHelpers";

export interface ISimpleAlertProps extends IComponentBaseProps {
    text?: string;
    title?: string;
    hasBlur?: boolean;
    cancellable?: boolean;
}

const textStyle = {
    whiteSpace: "pre-line" as any
};

export const QueryAlert = (props: ISimpleAlertProps) => {
    if (!props.text || props.hidden) return null;


    const generatedStyle = {
        ...makePositionParams(props.position)
    };

    /** Event Routing */
    const onClickOk = () => sendEvent("onClickOk", props.id, props.name);
    const onClickCancel = () => sendEvent("onClickCancel", props.id, props.name);
    const onFocus = () => sendEvent("onFocus", props.id, props.name);
    const onBlur = () => sendEvent("onBlur", props.id, props.name);
    const onChange = (e: any) => {
        const value = e.target.value;
        sendEvent("onChange", props.id, props.name, value);
    }

    return <div className="modal is-active" id={props.id.toString()}>
        {props.hasBlur && <div className="modal-background"></div> }
        <div className="modal-card" style={generatedStyle}>
            <header className="modal-card-head">
                {props.title && <p className="modal-card-title">{props.title}</p>}
                {props.cancellable === true && <button className="delete" aria-label="close" onClick={onClickCancel}></button>}
            </header>
            <section className="modal-card-body" style={textStyle}>
                <input className="input" placeholder={props.text} onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
            </section>
            <footer className="modal-card-foot is-centered">
                {props.cancellable === true && <button className="button" onClick={onClickCancel}>Cancel</button> }
                <button className="button is-success is-centered" onClick={onClickOk}>Ok</button>
            </footer>
        </div>
    </div>;
}
