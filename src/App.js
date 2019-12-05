import React from 'react';
import BoardList from './boards/BoardList';
import Auth from './auth/Auth';


const App = () => {
    return (
        <div className="App">
            <Auth />
            <BoardList />
        </div>
    );
};

export default App;
