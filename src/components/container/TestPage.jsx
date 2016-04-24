import React from 'react';
import { browserHistory as history } from 'react-router';

const TestPage = ({ props }) => (
    <div>
        It works!!!
        {' '}
        <button onClick={() => { history.push('/anotherPage') }}>Another page</button>
    </div>
);

export default TestPage;
