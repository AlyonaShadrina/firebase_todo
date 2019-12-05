import { observer } from 'mobx-react';
import React from 'react';

import AddBoard from './AddBoard';
import BoardItem from './BoardItem';
import { boards } from './firestore';


const BoardList = observer(() => {
    const { docs, isLoading } = boards;
    return (
        <div>
            <ul>
                {isLoading ? <span>Loading...</span> : undefined}
                {docs.map((doc) => (
                    <BoardItem
                        key={doc.id}
                        doc={doc}
                    />
                ))}
            </ul>
            <AddBoard />
        </div>
    );
});

export default BoardList;