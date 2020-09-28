import React from 'react';
import PropTypes from 'prop-types'




const TableList = (props) => {


    const { onRowClick, highlightedRowId } = props

    const repLogs = [
        {id: 1, reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 112.5},
        {id: 2, reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 180},
        {id: 8, reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72}
    ];

    const repLogElements = repLogs.map((repLog) => {
        return (
            <tr
                key={repLog.id}
                className={highlightedRowId === repLog.id ? 'table-primary' : ''}
                onClick={() => onRowClick(repLog.id)}
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


TableList.propTypes = {
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired
};