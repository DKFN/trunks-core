import {IComponentBasePositioningProps} from "./compontentProps";
import {Logger} from "../Logger";

const defaultPosition = {
    position: "absolute",
    top: 0,
    left: 0
}

export const makePositionParams = (positionProps: IComponentBasePositioningProps | undefined): any => {
    if (!positionProps) return defaultPosition;

    if (positionProps.positionType === "absolute")
        return {
            position: positionProps.positionType,
            top: positionProps.posY,
            left: positionProps.posX,
            height: positionProps.height,
            width: positionProps.width
        }
    Logger.error("Not implemented position type : " + positionProps.positionType, {positionProps});
}

export const sendEvent = (eventType: string, id: string | number, name?: string, value?: string) => {
    Logger.debug("Found event ... " + eventType)
    window.TRUNKS.sendEvent(eventType, {
        id: id,
        name: name,
        value: value
    })
}