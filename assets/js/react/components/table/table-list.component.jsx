import React, { useEffect, useState } from 'react';

const TableList = (props) => {

    const [highlightedRowId, setHighlightedRowId] = useState(null);

    const repLogs = [
        {id: 1, reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 112.5},
        {id: 2, reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 180},
        {id: 8, reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72}
    ];

    const handleRowClick = id => {
         setHighlightedRowId(id)
    }

    const repLogElements = repLogs.map((repLog) => {
        return (
            <tr
                key={repLog.id}
                className={highlightedRowId === repLog.id ? 'table-primary' : ''}
                onClick={() => handleRowClick(repLog.id)}
            >
                <td>{repLog.itemLabel}</td>
                <td>{repLog.reps}</td>
                <td>{repLog.totalWeightLifted}</td>
                <td>...</td>
            </tr>
        )
    });

    return (
        <>

                <tbody>
                {repLogElements}
                </tbody>

        </>
    );
};

export default TableList;
