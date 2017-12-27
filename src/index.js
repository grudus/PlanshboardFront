import React from 'react';
import { render } from 'react-dom';
import App from "./app/app.component";
import reducer from "./app/reducers/reducer.index"

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

render(<Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
