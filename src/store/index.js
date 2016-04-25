import _ from 'lodash';
import Immutable from 'immutable';
import { createStore } from 'redux';
import { counter, navigation } from 'reducers';

const reducers = {
    counter, navigation
};

function app(state = Immutable.Map(), action) {
    switch (action.type) {
        default:
            const newState = _.reduce(reducers, (currentState, reducer, key) => {
                return currentState.update(key, (stateSubtree) => reducer(stateSubtree, action));
            }, state);
            return newState;
    }
}

const store = createStore(app);

export default store;

