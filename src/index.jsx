import 'styles/reset.css';
import 'styles/app.css';
import 'styles.css';

import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import store from 'store';
import { AppContainer } from 'react-hot-loader';
import Root from 'components/Root';

const history = syncHistoryWithStore(browserHistory, store, { selectLocationState: (appState) => appState.get('navigation').toJS() });

const rootElement = document.getElementById('root');

render(
    <AppContainer
        component={Root}
        props={{ store, history }}
    />,
    rootElement
);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        render(
            <AppContainer
                component={require('./components/Root').default}
                props={{ store, history }}
            />,
            rootElement
        );
    });
}
