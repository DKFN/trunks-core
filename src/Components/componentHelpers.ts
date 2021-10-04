import {IComponentBasePositioningProps} from "./compontentProps";
import {Logger} from "../Logger";

export const makePositionParams = (positionProps: IComponentBasePositioningProps): any => {
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