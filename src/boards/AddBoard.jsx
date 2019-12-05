import { observer } from 'mobx-react';
import React, { useState } from 'react';

import State from '../State';
import { boards } from './firestore';


const AddBoard = observer(() => {
    const { uid } = State;

    const [values, setValues] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e) => {
        e.persist();
        setValues(oldObj => ({
            ...oldObj,
            [e.target.name]: e.target.value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        boards.add({
            ...values,
            uid,
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            AddBoard
            <input
                type="text"
                // value={values.name}
                onChange={handleChange}
                name="name"
                placeholder="name"
            />
            <input
                type="text"
                // value={values.description}
                onChange={handleChange}
                name="description"
                placeholder="description"
            />
            <button type="submit">Submit</button>
        </form>
    )
});

export default AddBoard;
