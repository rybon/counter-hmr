import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { CounterApp, TestPage, AnotherPage } from 'components/container';

export default function getRoutes() {
    return (
        <Route path="/" component={CounterApp}>
            <IndexRoute component={TestPage} />
            <Route path="anotherPage" component={AnotherPage} />
        </Route>
    );
}
