import Immutable from 'immutable';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants/ActionTypes';

const initialState = Immutable.fromJS({
    count: 0
});

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state.set('count', state.get('count') + 1);
        case DECREMENT_COUNTER:
            return state.set('count', state.get('count') - 1);
        default:
            return state;
    }
}
