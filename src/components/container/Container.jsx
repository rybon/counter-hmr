import React from 'react';
import ContainerComponent from 'ContainerComponent';
import { connect } from 'react-redux';

class Container extends ContainerComponent {
    render() {
        const { children } = this.props;

        return (
            <div>
                {children}
            </div>
        );
    }
}

export default connect()(Container);
