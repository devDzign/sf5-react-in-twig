import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.component';

import '../css/app.scss';

const $ = require('jquery');
require('bootstrap');

const App = () => {

    return <>
        <Hello/>
        </>
}

ReactDOM.render(<App/>, document.querySelector("#component-text"))