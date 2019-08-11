import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { title, clearItem, editItem } = this.props;
    return (
      <div>
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
          <h6>{title}</h6>
          <div className="todo-icon">
            <span onClick={editItem} className="mx-2 text-success">
              <i className="fas fa-pen"></i>
            </span>
            <span onClick={clearItem} className="mx-2 text-danger">
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </li>
      </div>
    )
  }
}
