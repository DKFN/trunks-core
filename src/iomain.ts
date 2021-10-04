import store, {AppDispatch} from "./redux/store";
import {Logger} from "./Logger";
import { addComponent } from "./Components/Renderer/rendererReducer";

declare global {
    interface Window {
        TRUNKS: TrunksIO;
    }
}

interface TrunksIOEvent {
    eventType: string;
    eventPayload: string;
}

/**
 * Entrypoint for the rendering API, this is what the game user script and the rendering will interact with each orther
 */
class TrunksIO {
    public version = "0.0.1"
    public events: TrunksIOEvent[] = []; // Waiting to be transferred events
    private dispatch: AppDispatch;
    private eventHook: any = undefined; // Hook used to transmit events to the UI

    constructor() {
        Logger.debug("Initializing IO Hook")
        this.dispatch = store.dispatch;
    }

    public setEventHook(hook: (eventPayload: string) => void) {
        Logger.debug("Event hook added")
        this.eventHook = hook;

        // Send all missed events
        this.events.forEach(e => hook(JSON.stringify(e)))
        this.events = [];
    }

    public sendEvent(eventType: string, eventPayload: any) {
        if (!this.eventHook) this.events.push({eventType, eventPayload})
        else {
            this.eventHook(JSON.stringify({eventType, eventPayload}));
        }
    }

    public addComponent(payload: string) {
        const componentPayload = this.parseJSON(payload)
        if (!componentPayload.id) {
            Logger.error("A component was passed to IOHook but is missing an id", {payload})
            return;
        }

        if  (!componentPayload.position) {
            Logger.error("A component was passed to IOHook but is missing position attributes", {payload})
            return;
        }

        this.dispatch(addComponent(payload));
    }

    public destroyComponent(payload: string) {
        const componentPayload = this.parseJSON(payload)
        if (!componentPayload.id) {
            Logger.error("A component was passed to IOHook but is missing an id", {payload})
            return;
        }
    }

    public updateComponent(payload: string) {
        const componentPayload = this.parseJSON(payload)
        if (!componentPayload.id) {
            Logger.error("A component was passed to IOHook but is missing an id", {payload})
            return;
        }
    }

    private parseJSON(payload: string) {
        try {
            return JSON.parse(payload);
        } catch (e) {
            Logger.error("Unable to parse payload JSON", {input: payload, error: e});
        }
    }
}

window.TRUNKS = new TrunksIO();