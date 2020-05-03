import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    /* shouldComponentUpdate(prevProps, prevState) {
        console.log('[Persons.js] shouldComponentUpdate');
    if (prevProps.persons !== this.props.persons 
            || prevProps.click !== this.props.click 
            || prevProps.changed !== this.props.changed) {
            return true;
        } else {
            return false;
        }
        //return false // to prevent update the state
    } */

    render() {
        console.log('[Persons.js] render...')
        return this.props.persons.map((person, index) => {
            return <Person
                key={index}
                name={person.name}
                age={person.age}
                click={this.props.deletePersonHandler.bind(this, index)}
                changed={this.props.nameChangeHandler.bind(this, index)} />
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js ] getSnapshotBeforeUpdate');
        return { message: 'Snapshot' };
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
}

export default Persons;
