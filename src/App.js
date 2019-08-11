import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items: [],
       id: uuid(),
       item: '',
       editItem: false,
    }
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: '',
      id: uuid(),
      editItem: false,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  clearItem = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItems,
    });
  };

  editItem = (id) => {
    const selectedItem = this.state.items.find(item => item.id === id);
    const filterItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      editItem: true,
      id,
    });

  };
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalized text-center">Todo Input</h3>
            <TodoInput 
              item={this.state.item}  
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              clearItem={this.clearItem}
              editItem={this.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
