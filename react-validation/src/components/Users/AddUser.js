import React, { useRef, useState } from "react"
import Wrapper from "../Helpers/Wrapper";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    
    const [error, setError] = useState();

    
    const addUserHandler =(e) =>{
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length ===0 ){
            return setError({
                title : 'Invalid Input',
                message : 'Please enter a valid name and age'
            });
        }
        // + 를 변수앞에 넣으면 number형으로 바꿔준다
        if(+enteredUserAge < 1){
            return setError({
                title : 'Invalid age',
                message : 'Please enter a valid  age (> 0)'
            });
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }


    const errorHandler = () =>{
        setError(null);
    }

    return(
        <Wrapper>
                {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
                    <Card className={classes.input}>
                        <form onSubmit={addUserHandler}>
                            <label htmlFor="username">Username</label>
                            <input id='username' type="text" 
                            ref={nameInputRef}/>
                            <label htmlFor="age">Age (Years)</label>
                            <input id="age" type="number" 
                            ref={ageInputRef}/>
                            <Button type="submit">Add User</Button>
                        </form>
                    </Card>
        </Wrapper>
        )
}

export default AddUser;