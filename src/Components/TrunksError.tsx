import React from "react";

interface ITrunksErrorProps {
    message: string;
    entity: any;
}

export const TrunksError = (props: ITrunksErrorProps) => {
    return <div className="notification is-danger" id="errorFrame" style={{margin: 50}}>
        <div className="title">Rendering error</div>
        {props.message} <br />
        I received that: <br />
        <pre id="inputDump">
            {JSON.stringify(props.entity, null, '  ')}
        </pre>
    </div>;
}
