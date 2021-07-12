import { string } from "prop-types";
import { actionTypes } from "./actionTypes";

const initialState = {
    message: "Uninitialized message"
};

type IAction = { type: actionTypes, payload: string };

const appReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.SAY_HELLO:
            return { ...state, message: action.payload }
        default:
            return state;
    }
}

export default appReducer;