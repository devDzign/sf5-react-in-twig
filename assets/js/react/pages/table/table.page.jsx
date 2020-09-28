import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Table from "../../components/table/table.component";
import getAllItems from "../../api/items.api";

const TableApp = (props) => {

    const repLogsData = [];

    const [repLogs, setRepLogs] = useState(repLogsData);
    const [highlightedRowId, setHighlightedRowId] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( () => {

        getRepLogs();

    }, [getAllItems]);


    const getRepLogs = async () => {

        const response = await getAllItems()
        const data = await response.data
        setRepLogs(data);
        setIsLoaded(true)
    }


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
            isLoaded={isLoaded}
        />
    </>
}

ReactDOM.render(<TableApp/>, document.querySelector("#component-table"))