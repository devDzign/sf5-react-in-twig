import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import Table from "../../components/table/table.component";

const TableApp = (props) => {

    const repLogsData = [
        {id: 1, reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 112.5},
        {id: 2, reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 180},
        {id: 8, reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72}
    ];


    const [repLogs, setRepLogs] = useState(repLogsData);
    const [highlightedRowId, setHighlightedRowId] = useState(null)


    const handleRowClick = id => {
        setHighlightedRowId(id)
    }




    const AddItemLog = (item) => {
        setRepLogs(prevState => {
            return [...prevState, item];
        });
    }

    return <>
        <Table
            highlightedRowId={highlightedRowId}
            onRowClick={handleRowClick}
            withHeart={true}
            repLogs={repLogs}
            onAddRepLog={AddItemLog}
        />
    </>
}

ReactDOM.render(<TableApp/>, document.querySelector("#component-table"))