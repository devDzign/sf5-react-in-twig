import React from 'react';
import TableList from "./table-list.component";

const Table = (props) => {

    let heart = '';

    if (props.withHeart) {
        heart = <span>❤</span>;
    }

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
               <TableList/>
                <tfoot>
                <tr>
                    <td>&nbsp;</td>
                    <th>Total</th>
                    <th>TODO</th>
                    <td>&nbsp;</td>
                </tr>
                </tfoot>
            </table>

            <form
                className="form-inline js-new-rep-log-form"
                noValidate
                data-url="{{ path('rep_log_new') }}"
            >
                <div className="form-group">
                    <label className="sr-only control-label required"
                           htmlFor="rep_log_item">
                        What did you lift?
                    </label>
                    <select id="rep_log_item"
                            name="item"
                            required="required"
                            className="form-control">
                        <option value="">What did you
                            lift?
                        </option>
                        <option value="cat">Cat</option>
                        <option value="fat_cat">Big Fat Cat</option>
                        <option value="laptop">My Laptop</option>
                        <option value="coffee_cup">Coffee Cup</option>
                    </select>

                </div>
                &ensp;
                <div className="form-group">
                    <label className="sr-only control-label required"
                           htmlFor="rep_log_reps">
                        How many times?
                    </label>
                    <input
                        type="number" id="rep_log_reps"
                        name="reps" required="required"
                        placeholder="How many times?"
                        className="form-control"
                    />
                </div>
                &ensp;
                <button type="submit" className="btn btn-primary">
                    I Lifted it!
                </button>
            </form>
        </>
    );
};

export default Table;
