import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js ] useEffect');
        //You can use Http request here
        setTimeout(()=>{//This is used to rerendering because useEffect will trigger only first time
            //alert('Data saved!!!!!!!')
        }, 1000);
        toggleRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup activity of useEffect can be done here')
        }
    }, [props.persons]);// Second argument is used only when changes happen in person object
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personsLength<=2){
        assignedClasses.push(classes.red);
    }
    if(props.personsLength<=1){
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(" ")}>Hi! Below are the person details.</p>
            <button 
                ref={toggleRef}
                className = {btnClass}
                onClick = {props.clicked}>Toggle Button</button>
            {/* <AuthContext.Consumer>
                {context => <button onClick={context.login}>Login</button> }
            </AuthContext.Consumer> */
            <button onClick={authContext.login}>Login</button>
            }
        </div>);
}

export default React.memo(Cockpit);