import React from 'react';
import PropTypes from 'prop-types'

const TableList = (props) => {

    const { onRowClick, highlightedRowId, repLogs } = props

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
                <td>
                    <a href="#">
                        <span className="fa fa-trash"></span>
                    </a>
                </td>
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
    onRowClick: PropTypes.func.isRequired,
    repLogs: PropTypes.array.isRequired
};