import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../../components/hello/hello.component';

const App = () => {

    return <>
        <Hello isHeartShow={true}/>
    </>
}

ReactDOM.render(<App/>, document.querySelector("#component-text"))