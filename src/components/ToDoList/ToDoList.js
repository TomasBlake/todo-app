import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import {Table} from 'reactstrap';

const toDoList = (props) => {
    return (
        <ul>
        <div className='todolist-container'>
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {props.toDoItems.map(item => {
                return <ToDoItem
                key={item.id} 
                id={item.id}
                userId={item.userId}
                title={item.title} 
                status={item.completed} /> 
            })}
        </tbody>
      </Table>
           
        </div>
        </ul>
    );
}

export default toDoList;