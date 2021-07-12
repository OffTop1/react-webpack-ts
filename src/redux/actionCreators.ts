import { actionTypes } from "./actionTypes"

export const sayHello = () => {
    return {
        type: actionTypes.SAY_HELLO,
        payload: "Hello world"
    }
} 