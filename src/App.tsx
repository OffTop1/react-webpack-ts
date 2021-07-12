import React from "react";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { sayHello } from "./redux/actionCreators";

const HelloWorld = () => {
    const message: string = useAppSelector(state => state.message);
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(sayHello())
    };

    return (
        <>
            <h1>{message}</h1>
            <button onClick={handleClick}>Click me!</button>
        </>
    );
}

export default HelloWorld;