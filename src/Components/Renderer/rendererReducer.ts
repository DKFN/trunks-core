import {createAction, createReducer} from "@reduxjs/toolkit";
import fp from "lodash/fp";

export const addComponent = createAction<string>('ADD_COMPONENT');
export const updateComponent = createAction<string>('UPDATE_COMPONENT');

const initialState = {
    components: {}
}

export const rendererReducer = createReducer(initialState, {
    [addComponent.type]: (state: any, action: any) => {
        const component = JSON.parse(action.payload);
        const newComponents = {...state.components,
            [component.id]: component
        }
        return {...state, components: newComponents}
    },
    [updateComponent.type]: (state: any, action: any) => {
        const parsedPayload = JSON.parse(action.payload);
        const component = state.components[parsedPayload.id];
        const newComponent = fp.merge(component, parsedPayload);
        const newComponents = {...state.components,
            [component.id]: newComponent
        }
        return {...state, components: newComponents};
    }
})