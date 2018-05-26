import React, { Component } from 'react';
import { InputGroup, Button, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';

class ListEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newItem: "",
      listItems: ['a', 'b', 'c']
    }

    this.handleNewItem = this.handleNewItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  
  handleNewItem(e) {
    e.preventDefault();
    this.setState(preStat => {
      let newList = preStat.listItems.slice();
      newList.push(preStat.newItem);
      return {
        newItem: "",
        listItems: newList
      }
    })
  }

  handleDeleteItem(e) {
    console.log(e.target.id);
    let newList = [];
    for(let ele of this.state.listItems) {
      if(ele !== e.target.id) newList.push(ele);
    }
    console.log(newList);
    this.setState({
      listItems: newList
    })
  }

  handleSave(e) {
    e.preventDefault();
    console.log("handle save");
    console.log(e);
  }

  render() { 
    return (  
      <div>
        <InputGroup>
          <FormControl
          type="text"
          placeholder="Enter text"
          value={this.state.newItem}
          onChange={e => {this.setState({newItem: e.target.value})}}
          />
          <InputGroup.Button>
            <Button onClick={this.handleNewItem}>Add</Button>
          </InputGroup.Button>
        </InputGroup>
        <ListGroup>
        {this.state.listItems.map(item => 
          <ListGroupItem>
            <span className="deleteIcon" id={item} onClick={this.handleDeleteItem}>X</span>
            {item}
          </ListGroupItem>
        )}
        </ListGroup>
        <Button>Save</Button>
      </div>
    )
  }
}
 
export default ListEditor;