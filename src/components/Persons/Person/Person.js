import React, { Component, Fragment } from 'react';
import styles from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    static contextType = AuthContext;

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...')
        /* return (
            <Fragment>
                <p onClick={this.props.click} >Hi I am {this.props.name} and I am {this.props.age} year's old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <div>
                This is adjecent div
                </div>
            </Fragment>) */
        return (
            <Auxiliary>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please Log-In!</p>}
                </AuthContext.Consumer> */
                this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log-In!</p>
                }
                
                <p onClick={this.props.click} >Hi I am {this.props.name} and I am {this.props.age} year's old</p>
                <p>{this.props.children}</p>
                <input type="text"
                 //ref={(inputEl) => this.inputElement = inputEl}
                 ref={this.inputElementRef}
                 onChange={this.props.changed} 
                 value={this.props.name} />

                <div>
                    This is adjecent div
                </div>
            </Auxiliary>)

        /* return (
                <div className={styles.Person}>
                    <p onClick={this.props.click} >Hi I am {this.props.name} and I am {this.props.age} year's old</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
                ) */
        /*    return [
               <div className={styles.Person} key="p-sec">
                   <p onClick={this.props.click} >Hi I am {this.props.name} and I am {this.props.age} year's old</p>
                   <p>{this.props.children}</p>
                   <input type="text" onChange={this.props.changed} value={this.props.name} />
               </div>,
               <div key="o-sec">
                   This is adjecent div
               </div>
       ] */
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person, styles.Person);