import { Collection, initFirestorter } from 'firestorter';
import { observer } from 'mobx-react';
import React from 'react';

import firebase from '../firebase';
import BoardItem from './BoardItem';

initFirestorter({ firebase: firebase });

const todos = new Collection('boards');

const BoardList = observer(() => {
    const { docs, isLoading } = todos;
    return <ul>
        {isLoading ? <span>Loading...</span> : undefined}
        {docs.map((doc) => (
            <BoardItem
                key={doc.id}
                doc={doc}
            />
        ))}
    </ul>;
});

export default BoardList;