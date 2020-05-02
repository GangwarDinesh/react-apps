import React, { Component } from 'react'; 
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{
  
  state = {
    persons : [
      {name : "Dinesh", age : 29},
      {name : "Ajit", age : 25},
      {name : "Aditya", age : 26}
    ],
    showPersons : false
  }

  changePropertyHandler = (newName) =>{
    console.log("changePropertyHandler clicked");
    this.setState({
      persons : [
        {name : newName, age : 29},
        {name : "Ajit", age : 25},
        {name : "Aditya", age : 28}
      ]
    })
  }

  nameChangeHandler = (index, event) => {
    const person = {...this.state.persons[index]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({persons : persons});

  }

  toggleHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) =>{
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  render(){
  
    let persons = null;
    
    if(this.state.showPersons){
      persons = <Persons 
                  persons = {this.state.persons}
                  deletePersonHandler = {this.deletePersonHandler}
                  nameChangeHandler = {this.nameChangeHandler} />
    }
    
    return (
      <div className={styles.App}>
        <Cockpit
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.toggleHandler} />
        { persons }
      </div>
    );  
  }  
}
export default App;