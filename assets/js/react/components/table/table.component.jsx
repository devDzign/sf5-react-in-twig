import React from 'react';
import TableList from "./table-list.component";
import PropTypes from "prop-types";
import TableForm from "./table-form.component";

const Table = (props) => {

    let heart = '';

    const {
        withHeart,
        onRowClick,
        highlightedRowId,
        repLogs,
        onAddRepLog
    } = props

    if (withHeart) {
        heart = <span>❤</span>;
    }

    const calculateTotalWeightLifted = repLogs => repLogs.reduce((total, log) => total + log.totalWeightLifted, 0);

    return (
        <>
            <h2>Lift Stuff! {heart}</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>What</th>
                    <th>How many times?</th>
                    <th>Weight</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>

                <TableList
                    onRowClick={onRowClick}
                    highlightedRowId={highlightedRowId}
                    repLogs={repLogs}
                />
                <tfoot>
                <tr>
                    <td>&nbsp;</td>
                    <th>Total</th>
                    <th>{calculateTotalWeightLifted(repLogs)}</th>
                    <td>&nbsp;</td>
                </tr>
                </tfoot>
            </table>

            <TableForm
                onAddRepLog={onAddRepLog}
            />
        </>
    );
};

export default Table;


Table.propTypes = {
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    withHeart: PropTypes.bool,
    repLogs: PropTypes.array.isRequired
};