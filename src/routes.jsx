import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, IndexPage, AnotherPage } from 'components/container';

export default function getRoutes() {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={IndexPage} />
            <Route path="anotherPage" component={AnotherPage} />
        </Route>
    );
}
