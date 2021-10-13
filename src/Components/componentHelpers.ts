import {IComponentBasePositioningProps} from "./compontentProps";
import {Logger} from "../Logger";
import store from "../redux/store";
import _ from "lodash";

const defaultPosition = {
    position: "absolute",
    top: 0,
    left: 0
}

export const makePositionParams = (positionProps: IComponentBasePositioningProps | undefined, parentPos?: IComponentBasePositioningProps): any => {
    if (!positionProps) return defaultPosition;

    if (positionProps.positionType === "absolute") {

        Logger.log("ParentPos : " + JSON.stringify(parentPos));
        const basePosParams = parentPos
            ? {
                    top: (parentPos!.posY as number) + (positionProps!.posY as number),
                    left: (parentPos!.posX as number)  + (positionProps!.posX as number)
                } : {
                top: positionProps.posY,
                left: positionProps.posX,
            }
            const a = _.merge(basePosParams, {
                position: positionProps.positionType,
                height: positionProps.height,
                width: positionProps.width,
                ...basePosParams
            });

        Logger.log("Rendering : " + JSON.stringify(a));
        return a;
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