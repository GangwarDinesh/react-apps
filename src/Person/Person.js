import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        background: darkgrey;
        '@media (min-width : 500px)': {
            width: '450px'
        }
    `;
const person = (props) => {
    const styles = {
        '@media (min-width : 500px)': {
            width: '450px'
        }
    }
    return (
    //<div className="Person" style={styles}>
    <StyledDiv>
        <p onClick={props.click} >Hi I am {props.name} and I am {props.age} year's old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
    //</div>
    )
}

export default person;