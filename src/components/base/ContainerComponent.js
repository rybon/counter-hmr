import React, { Component } from 'react';

export default class ContainerComponent extends Component {}

ContainerComponent.contextTypes = {
    currentLocale: React.PropTypes.string.isRequired
};
