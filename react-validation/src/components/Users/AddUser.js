import React, { useState } from "react"

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] =useState('')

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }
    
    const ageChangeHandler =(event) =>{
        setEnteredAge(event.target.value)
    }
    
    
    const addUserHandler =(e) =>{
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
            return
        }
        // + 를 변수앞에 넣으면 number형으로 바꿔준다
        if(+enteredAge < 1){
            return
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');

    }


    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        )
}

export default AddUser;