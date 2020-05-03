import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    console.log('[Persons.js] rendering...')
    return props.persons.map( (person, index) => {
        return <Person 
                    key={index} 
                    name={person.name}
                    age={person.age} 
                    click={props.deletePersonHandler.bind(this, index)}
                    changed={props.nameChangeHandler.bind(this, index)} />
    });
}

export default persons;
