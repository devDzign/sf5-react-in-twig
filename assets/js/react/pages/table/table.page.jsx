import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Table from "../../components/table/table.component";

const TableApp = (props) => {

    const [highlightedRowId, setHighlightedRowId] = useState(null)

    const handleRowClick = id => {
        setHighlightedRowId(id)
    }

    return <>
        <Table
            highlightedRowId={highlightedRowId}
            onRowClick={handleRowClick}
            withHeart={true}
        />
    </>
}

ReactDOM.render(<TableApp/>, document.querySelector("#component-table"))