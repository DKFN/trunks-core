import {createAction, createReducer} from "@reduxjs/toolkit";
import _ from "lodash";

export const addComponent = createAction<string>('ADD_COMPONENT');

const initialState = {
    components: {}
}

export const rendererReducer = createReducer(initialState, {
    [addComponent.type]: (state: any, action: any) => {
        const component = JSON.parse(action.payload);
        const newComponents = {...state.components,
            [component.id]: component
        }
        return {components: newComponents}
    }
})