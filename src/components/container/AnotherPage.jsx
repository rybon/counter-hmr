import React from 'react';
import { browserHistory as history } from 'react-router';

const AnotherPage = ({ props }) => (
    <div>
        Another page.
        {' '}
        <button onClick={history.goBack}>Go back</button>
    </div>
);

export default AnotherPage;
