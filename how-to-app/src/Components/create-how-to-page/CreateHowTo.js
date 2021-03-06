//basic library/framework imports
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Container, Form, Label, FormGroup, Input } from "reactstrap";
import Header from "../Header";
//component imports
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { UserContext, GuidesContext } from "../../contexts/index";

//initial value for the NEW how to object


const CreateHowTo = props => {

  const [user] = useContext(UserContext); //Makes user context store available to validate {type: 'creator'}

  const currentUser = JSON.parse(user)

  const initialValue = {
    user_id: currentUser.id,
    type: 'Food',
    title: "",
    description: "Things you should know",
    step_1: ""
  };

  const [newHowTo, setNewHowTo] = useState(initialValue); //State for the New how-to object
 
  const [guides, setGuides] = useContext(GuidesContext);
  
  let [steps, setSteps] = useState([1]); //variable to add more steps



  //Handles the Change that is made the values
  const HandleChange = e => {
    e.persist();

    let value = e.target.value;

    setNewHowTo({
      ...newHowTo,
      [e.target.name]: value
    });
  };

  //Handles the form when it is ready to be sent to the server
  const HandleSubmit = e => {
    e.preventDefault();

    const duplicateTitle = guides.map(guide => guide.title == newHowTo.title).includes(true)

    if (!duplicateTitle) {

      axiosWithAuth("post", "https://bw-how-to.herokuapp.com/guides", newHowTo)
        .then(res => {
          setGuides([...guides, newHowTo]);
          props.history.push("/userpagenewsfeed");
        })
        .catch(err => console.log('CreateHowTo: newHowTo=', newHowTo, 'guides=', guides, err));
    } else {
      //TODO: make better response to a duplicate title
      console.log('Guide already exists with that title')
      setNewHowTo(initialValue)
    }
  };

  //Adds another key/value pair to the how-to object
  const addStep = e => {
    e.preventDefault();

    if(steps.length == 5){
      alert('Only a MAXIMUM of 5 steps')
    } else {
      setSteps([...steps, steps.length + 1]);
    }
    const key = `step_${steps.length + 1}`;

    setNewHowTo({
      ...newHowTo,
      [key]: ""
    });
  };

  // if (user.type === "creator") {
    //   the form where data will be inputed
    return (
      <Container className="create-how-to-cont">
        <Header />
        <h3 className="create-how-to-text">Create a How-To</h3>
        <Form className="create-how-to-form" onSubmit={HandleSubmit}>
          <FormGroup className="how-to-title-category">
            <div className="title-ht">
              <Label className="ht-title-text" for="title">
                Title of How-To
              </Label>
              <Input
                className="ht-title-input"
                name="title"
                type="text"
                value={newHowTo.title}
                onChange={HandleChange}
              />
            </div>

            <div className="category-ht">
              <Label className="ht-title-text" for="type">
                Category
              </Label>
              <Input
                className="ht-title-input"
                type="select"
                name="category"
                onChange={HandleChange}
              >
                <option value="selected"></option>
                <option className="ht-options" value="cars">
                  Cars and Other Vehices
                </option>
                <option className="ht-options" value="computers">
                  Computers and Electronics
                </option>
                <option className="ht-options" value="food">
                  Food and Cooking
                </option>
                <option className="ht-options" value="finance">
                  Finance and Business
                </option>
                <option className="ht-options" value="hobbies">
                  Hobbies and Craft
                </option>
                <option className="ht-options" value="home">
                  Home and Garden
                </option>
                <option className="ht-options" value="lifeHacks">
                  Life Hacks
                </option>
              </Input>
            </div>
          </FormGroup>
          {steps.map(step => (
            <FormGroup key={step} className="how-to-steps">
              <Label
                className="ht-steps-text"
                for={`step_${step}`}
              >{`Step ${step}`}</Label>
              <Input
                className="ht-step-input"
                name={`step_${step}`}
                type="textarea"
                value={newHowTo[`step_${step}`]}
                onChange={HandleChange}
              />
            </FormGroup>
          ))}
          <button className="btn-add-step" onClick={addStep}>
            + add next step
          </button>
          <button className="how-to-submit" onClick={HandleSubmit}>
            Submit
          </button>
        </Form>
      </Container>
    );
};

export default CreateHowTo;
