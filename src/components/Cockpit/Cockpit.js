import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length<=2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length<=1){
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(" ")}>Hi! Below are the person details.</p>
            <button 
                className = {btnClass}
                onClick = {props.clicked}>Toggle Button</button>
        </div>);
}

export default cockpit;