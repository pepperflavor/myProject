import React, { useState } from "react"

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] =useState('')
    const [error, setError] = useState();

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }
    
    const ageChangeHandler =(event) =>{
        setEnteredAge(event.target.value)
    }
    
    
    const addUserHandler =(e) =>{
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0 ){
            return setError({
                title : 'Invalid Input',
                message : 'Please enter a valid name and age'
            });
        }
        // + 를 변수앞에 넣으면 number형으로 바꿔준다
        if(+enteredAge < 1){
            return setError({
                title : 'Invalid age',
                message : 'Please enter a valid  age (> 0)'
            });
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }


    const errorHandler = () =>{
        setError(null);
    }


    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
                <Card className={classes.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                        <label htmlFor="age">Age (Years)</label>
                        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                        <Button type="submit">Add User</Button>
                    </form>
                </Card>
        </div>
        )
}

export default AddUser;