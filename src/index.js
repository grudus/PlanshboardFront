import React from 'react';
import { render } from 'react-dom';
import App from "./app/App";
import reducer from "./app/reducers/reducer.index"

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk";

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
);

render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
