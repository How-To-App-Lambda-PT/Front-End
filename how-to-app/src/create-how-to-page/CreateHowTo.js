//basic library/framework imports
import React, { useState } from 'react';
import axios from 'axios';

//component imports


//initial value for the NEW how to object
const initialValue = {

    user_id:-1,
    title:'',
    type:'',
    description:'',
    step_1:''
};

const CreateHowTo = ({ user_id }) => {
    const [newHowTo, setNewHowTo ] = useState(initialValue); //State for the New how-to object

    let [ step, setStep ] = useState(1); //variable to add more steps


    console.log(newHowTo)

    //Handles the Change that is made the values
    const HandleChange = e => {
        e.persist();

        let value = e.target.value;

        setNewHowTo({
            ...newHowTo,
            [e.target.name] : value
        })
    }

    //Handles the form when it is ready to be sent to the server
    const HandleSubmit = e => {


        console.log(newHowTo)
        e.preventDefault();

    };


    //Adds another key/value pair to the how-to object
    const addStep = e => {

        e.preventDefault();

        setStep(step + 1)

        const key = `step_${step}`

        setNewHowTo({
            ...newHowTo,
            [key]:''
        })
    };


    //the form where data will be inputed
    return(
        <form onSubmit={HandleSubmit}>
            <input 
                name="title"
                type="text"
                value={newHowTo.title}
                onChange={HandleChange}
                placeholder="title"
            />
            <input 
                name="description"
                type="text"
                value={newHowTo.description}
                onChange={HandleChange}
                placeholder="desctiption"
            />            
        <input 
            name="step_1"
            type="textarea"
            value={newHowTo.step_1}
            onChange={HandleChange}
            placeholder="First step"
        />
        <button onClick={addStep}>add next step</button>
        <button>Submit</button>
        </form>
    );
};

export default CreateHowTo;