/**
 * @jest-environment jsdom
 */ 
import * as React from "react";
import { act } from "react-dom/test-utils";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

describe('App', () => {
    it('should display [Uninitialized message]', () => {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <App/>
                </Provider>, container);
        });
        const header = container.querySelector('h1');
        expect(header?.textContent).toBe("Uninitialized message")
    });
});
