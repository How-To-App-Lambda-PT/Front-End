//basic library/framework imports
import React, { useState } from 'react';
import axios from 'axios';

//component imports
import { axiosWithAuth } from '../../utils/axiosWithAuth'

//initial value for the NEW how to object
const initialValue = {

    user_id:-1,
    title:'',
    type:'',
    description:'',
    step_1:''
};

const CreateHowTo = props => {
    const [ newHowTo, setNewHowTo ] = useState(initialValue); //State for the New how-to object

    let [ steps, setSteps ] = useState([1]); //variable to add more steps

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

        e.preventDefault();

        axiosWithAuth( 'post', '/guides', newHowTo )
            .then(res => props.history.push(`guides/${newHowTo.user_id}`))
            .catch(err => console.log(err) )

    };


    //Adds another key/value pair to the how-to object
    const addStep = e => {

        e.preventDefault();

        setSteps([
            ...steps,
            steps.length+1
        ])

        const key = `step_${steps.length+1}`

        setNewHowTo({
            ...newHowTo,
            [key]:''
        })
    };

    if(props.type==='creator'){
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
                <select name="type" onChange={HandleChange}>
                    <option value="selected">category</option>
                    <option value="cars">Cars and Other Vehices</option>
                    <option value="computers">Computers and Electronics</option>
                    <option value="food">Food and Cooking</option>
                    <option value="finance">Finance and Business></option>
                    <option value="hobbies">Hobbies and Craft</option>
                    <option value="home">Home and Garden</option>
                    <option value="lifeHacks">Life Hacks</option>
                </select>  
                <input 
                    name="description"
                    type="text"
                    value={newHowTo.description}
                    onChange={HandleChange}
                    placeholder="desctiption"
                />            
                {steps.map(step  => ( 
                    <input
                    name={`step_${step}`}
                    type="textarea"
                    value={newHowTo[`step_${step}`]}
                    onChange={HandleChange}
                    placeholder={`step ${step}`}
                    />
                ))}
                <button onClick={addStep}>add next step</button>
                <button onClick={HandleSubmit}>Submit</button>
            </form>
        );
    }
    return(
        <h2>MUST SIGN UP IN ORDER TO POST</h2>
    )
};

export default CreateHowTo;