import {PositionMethod} from "../Types/position";
import {ComponentEvents} from "../Types/crud";

/**
 * Minimum payload for all exchanges
 */
export interface IPayloadBase {
    id: string | number; // Id: defined by implemtor and reused during all the process
}


// Input payloads
export interface ICreateComponentPayload extends IPayloadBase{
    name?: string;
    positionType?: PositionMethod;
}


// Output payloads
export interface IComponentEvent extends IPayloadBase {
    event: ComponentEvents;
    name?: string;
    value?: string | number;
}