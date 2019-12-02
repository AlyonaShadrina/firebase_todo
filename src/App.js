import React, { useState } from 'react';
import { observer } from "mobx-react";

import './App.css';
import firebase from "./firebase";
import Store from "./Counter";


const App = observer(props => {

    const { increase, decrease, count } = Store;

    const [list, setList] = useState([]);

  const hadleSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();

      db.collection("boards").get().then((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
              list.push(doc.data())
          });
          setList(list)
      });

    const userRef = db.collection('boards').add({
      name: 'name 1',
      description: 'description 1'
    }).then((smth) => {
      console.log('smth', smth.id);
    });

  };

  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={increase}>increment</button>
        <button onClick={decrease}>decrease</button>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item.name}</li>
            ))}
        </ul>

      <form onSubmit={hadleSubmit}>
        <input
            type="text"
            name="fullname"
            placeholder="Full name"
        />
        <input
            type="email"
            name="email"
            placeholder="Full name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

export default App;
