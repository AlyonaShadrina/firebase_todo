import { observer } from 'mobx-react';
import React from 'react';


const BoardItem = observer(props => {
    const { doc } = props;
    const { description, name } = doc.data;
    return (
        <li>
            <div>{name}</div>
            <div style={{ fontWeight: 100 }}>{description}</div>
        </li>
    );
});

export default BoardItem;