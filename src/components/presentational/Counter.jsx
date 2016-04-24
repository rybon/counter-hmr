import React, { PropTypes } from 'react';
import AbstractComponent from 'AbstractComponent';
import classNames from 'classnames';

export default class Counter extends AbstractComponent {
    render() {
        const { increment, decrement, counter } = this.props;

        return (
            <p className={classNames(styles.themed)}>
                Clicked: {counter}
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
            </p>
        );
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
};

const styles = cssInJS({
    themed: {
        color: GlobalStyles.Theme.Color,
        fontSize: '20px'
    }
});
