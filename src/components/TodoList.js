import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, clearItem, editItem } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                clearItem={() => clearItem(item.id)}
                editItem={() => editItem(item.id)}
              />
            )
          })}
          
          <button onClick={clearList} type="button" className="btn btn-danger btn-block text-capitalize mt-3">clear list</button>
        </ul>
      </div>
    )
  }
}
