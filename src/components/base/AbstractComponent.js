import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class AbstractComponent extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return shallowCompare(this, nextProps, nextState, nextContext);
    }
}

AbstractComponent.contextTypes = {
    currentLocale: React.PropTypes.string.isRequired
};
