import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { currentCount } from 'selectors';
import * as CounterActions from 'actions';
import { Container } from 'components/container';
import { Counter } from 'components/presentational';

function appSelector(appState) {
    return {
        currentLocale: 'en-gb',
        counter: currentCount(appState)
    };
  }

class App extends Component {
    getChildContext() {
        return {
            currentLocale: this.props.currentLocale
        };
    }

    render() {
        const { counter, dispatch, children } = this.props;

        return (
            <Container>
                <Counter counter={counter}
                    {...bindActionCreators(CounterActions, dispatch)}
                />
                {children}
            </Container>
        );
    }
}

App.childContextTypes = {
    currentLocale: React.PropTypes.string.isRequired
};

export default connect(appSelector)(App);
