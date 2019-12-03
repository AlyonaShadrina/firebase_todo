import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";

import './App.css';
import State from "./State";
import Auth from './auth/Auth';


const App = observer(props => {

    const { boards, getAllBoards, addBoard } = State;

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

    useEffect(() => {
        getAllBoards()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBoard(values)
    };

  return (
    <div className="App">
        <ul>
            {boards.map((item, i) => (
                <li key={i}>{item.name}</li>
            ))}
        </ul>

      <form onSubmit={handleSubmit}>
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
        <Auth />
    </div>
  );
});

export default App;
