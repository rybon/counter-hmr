import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import getRoutes from 'routes';

const Root = ({ store, history }) => (
    <Provider store={store}>
        <Router key={Math.random()} history={history}>
            {getRoutes()}
        </Router>
    </Provider>
);

export default Root;
