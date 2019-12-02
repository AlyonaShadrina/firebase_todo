import React from 'react';


import './App.css';
import firebase from "./firebase";

function App() {
  const hadleSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();

    const userRef = db.collection('boards').add({
      name: 'name 1',
      description: 'description 1'
    }).then((smth) => {
      console.log('smth', smth.id);
    });

  };

  return (
    <div className="App">
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
}

export default App;
