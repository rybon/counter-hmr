import { createSelector } from 'reselect';

function counter(state) {
    return state.get('counter');
}

export const currentCount = createSelector(
    [counter],
    (counter) => {
        return counter.get('count');
    }
);
