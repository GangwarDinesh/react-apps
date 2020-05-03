import React, { Component } from 'react'; 
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component{

  constructor(props){
    super(props);
    console.log('[App.js] constructor.');
  }
  
  state = {
    persons : [
      {name : "Dinesh", age : 29},
      {name : "Ajit", age : 25},
      {name : "Aditya", age : 26}
    ],
    showPersons : false,
    changeCount: 0,
    isAuthenticated: false
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
    this.setState((prevState, props) => {
      return {
        persons : persons,
        changeCount: prevState.changeCount+1
      }
    });
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

  loginHandler = () =>{
    this.setState({isAuthenticated: true});
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  /*componentWillMount(){
    console.log('[App.js] componentWillMount')
  }*/

  static getDerivedStateFromProps(props, state){
    console.log('[App.js ] getDerivedStateFromProps : ', props);

    return state;
  }

  render(){
    console.log('[App.js] render.');
    let persons = null;
    
    if(this.state.showPersons){
      persons = <Persons 
                  persons = {this.state.persons}
                  deletePersonHandler = {this.deletePersonHandler}
                  nameChangeHandler = {this.nameChangeHandler} />
    }
    
    return (
      <Auxiliary>
        <AuthContext.Provider 
              value={{
                      authenticated: this.state.isAuthenticated, 
                      login: this.loginHandler
                    }}>
          <Cockpit
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            clicked = {this.toggleHandler} />
          { persons }
        </AuthContext.Provider>
      </Auxiliary>
    );  
  }  
}
export default withClass(App, styles.App);