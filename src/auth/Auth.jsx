import React, { useState } from "react";
import { observer } from "mobx-react";
import State from "../State";

const Auth = observer(() => {
    const { signIn } = State;

    const [values, setValues] = useState({
        email: '',
        password: '',
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
        signIn(values)
    };
    return (
        <form onSubmit={handleSubmit}>
            Auth
            <input
                type="email"
                // value={values.name}
                onChange={handleChange}
                name="email"
                placeholder="email"
            />
            <input
                type="password"
                // value={values.description}
                onChange={handleChange}
                name="password"
                placeholder="password"
            />
            <button type="submit">Submit</button>
        </form>
    )
});

export default Auth;