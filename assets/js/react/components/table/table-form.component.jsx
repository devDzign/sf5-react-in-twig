import React, { useState } from 'react';
import PropTypes from "prop-types";

import { v4 as uuid } from "uuid";

const TableForm = (props) => {

    const {  onAddRepLog } = props
    const  itemOptions = [
        { id: 'cat', text: 'Cat' },
        { id: 'fat_cat', text: 'Big Fat Cat' },
        { id: 'laptop', text: 'My Laptop' },
        { id: 'coffee_cup', text: 'Coffee Cup' },
    ];

    const [selectedItem, setSelectedItem] = useState({
            labelName: "",
            reps: 0
        }
    );
    const handleChange = (event) => {
        const {value, name} = event.target;
        setSelectedItem({...selectedItem, [name]: value});
    }

    const handleNewItemSubmit = event => {
        event.preventDefault()

        if (selectedItem.reps <= 0) {
            // TODO - print some validation error!
            // don't submit, or clear the form
            return;
        }

        let newRep = {
            id: uuid(),
            reps: selectedItem.reps,
            itemLabel: selectedItem.labelName,
            totalWeightLifted: Math.floor(Math.random() * 50)
        }

        onAddRepLog(newRep)

        setSelectedItem(
            {
                labelName: "",
                reps: 0
            }
        )
    }

    return (
        <>
            <form
                className="form-inline js-new-rep-log-form"
                noValidate
                data-url="{{ path('rep_log_new') }}"
                onSubmit={handleNewItemSubmit}
            >
                <div className="form-group">
                    <label className="sr-only control-label required"
                           htmlFor="rep_log_item">
                        What did you lift?
                    </label>
                    <select id="rep_log_item"
                            name={"labelName"}

                            required="required"
                            className="form-control"
                            onChange={handleChange}
                    >
                        <option value="">What did you
                            lift?
                        </option>

                        {itemOptions.map(option => {
                            return <option value={option.id} key={option.id}>{option.text}</option>
                        })}
                    </select>

                </div>
                &ensp;
                <div className="form-group">
                    <label className="sr-only control-label required"
                           htmlFor="rep_log_reps">
                        How many times?
                    </label>
                    <input
                        type="number"
                        id="rep_log_reps"
                        name={"reps"}
                        value={selectedItem.reps}

                        required="required"
                        placeholder="How many times?"
                        className="form-control"
                        onChange={handleChange}
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

export default TableForm;


TableForm.propTypes = {
    onAddRepLog: PropTypes.func.isRequired,
};

