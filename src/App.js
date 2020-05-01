import React, { Component } from 'react'; // For Component based
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';


const StyledButton = styled.button`
        background-color : ${props => props.alt ? 'red' : 'green'};
        font: inherit;
        border: 1px solid gray;
        padding: 8px;
        cursor: pointer;
        
        &:hover {
          background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
          color: black;
        }
    `;
//Below are the class based component with state object
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
    const classess = [];
    if(this.state.persons.length<=2){
      classess.push('red');
    }
    if(this.state.persons.length<=1){
      classess.push('bold');
    }
    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person, index)=>{
              return <Person key={index}
                        name={person.name}
                        age={person.age}
                        click={this.deletePersonHandler.bind(this, index)}
                        changed={this.nameChangeHandler.bind(this, index)} />
            })}
          </div>
      );
    }
    return (
      <div className="App">
        <p className={classess.join(" ")}>Hi! Below are the person details.</p>
        <StyledButton  alt={this.state.showPersons}
          onClick={this.toggleHandler}>Toggle Button</StyledButton>
        { persons }
      </div>
    );  
  }  
}
export default App;