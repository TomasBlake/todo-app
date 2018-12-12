import React from 'react';
import './ToDoItem.css';

const toDoItem = (props) => {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.title}</td>
            <td>{props.Status ? 'Done' : 'Waiting'}</td>
          </tr>
    );
}

export default toDoItem;