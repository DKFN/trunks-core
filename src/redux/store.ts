import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {rendererReducer} from "../Components/Renderer/rendererReducer";

export interface IAppState {
    renderer: {
        components: object[]
    }
}
const store = configureStore({
    reducer: combineReducers({
        renderer: rendererReducer
    }),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store