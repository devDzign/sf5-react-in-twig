import React from 'react';
import ReactDOM from 'react-dom';
import Table from "../../components/table/table.component";

const App = () => {

    return <>
        <Table withHeart={true}/>
    </>
}

ReactDOM.render(<App/>, document.querySelector("#component-table"))