//basic library/framework imports
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Container, Form, Label, FormGroup, Input } from "reactstrap";
import Header from "../Header";
//component imports
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { UserContext, GuidesContext } from "../../contexts/index";

//initial value for the NEW how to object
const initialValue = {
  user_id: -1,
  title: "",
  type: "",
  description: "",
  tools: "",
  step_1: ""
};

const CreateHowTo = props => {
  const [newHowTo, setNewHowTo] = useState(initialValue); //State for the New how-to object
  const [user] = useContext(UserContext); //Makes user context store available to validate {type: 'creator'}
  const [guides, setGuides] = useContext(GuidesContext);
  let [steps, setSteps] = useState([1]); //variable to add more steps

  //Handles the Change that is made the values
  const HandleChange = e => {
    e.persist();

    let value = e.target.value;

    setNewHowTo({
      ...newHowTo,
      user_id: user.id,
      [e.target.name]: value
    });
  };

  //Handles the form when it is ready to be sent to the server
  const HandleSubmit = e => {
    e.preventDefault();

    axiosWithAuth("post", "https://bw-how-to.herokuapp.com/guides", newHowTo)
      .then(res => {
        setGuides([...guides, newHowTo]);
        props.history.push("/userpagenewsfeed");
      })
      .catch(err => console.log(err));
  };

  //Adds another key/value pair to the how-to object
  const addStep = e => {
    e.preventDefault();

    setSteps([...steps, steps.length + 1]);

    const key = `step_${steps.length + 1}`;

    setNewHowTo({
      ...newHowTo,
      [key]: ""
    });
  };

  if (user.type === "creator") {
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
                name="type"
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
          <FormGroup className="how-to-skills-tools">
            <div className="skills-ht">
              <Label className="ht-boxes-text" for="description">
                Skills Required
              </Label>
              <Input
                className="ht-skills-input"
                name="description"
                type="textarea"
                value={newHowTo.description}
                onChange={HandleChange}
              />
            </div>
            <div className="tools-ht">
              <Label className="ht-boxes-text" for="tools">
                Tools Required
              </Label>
              <Input
                className="ht-skills-input"
                name="tools"
                type="textarea"
                value={newHowTo.tools}
                onChange={HandleChange}
              />
            </div>
          </FormGroup>
          {steps.map(step => (
            <FormGroup className="how-to-steps">
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
  }
  // return <h2>MUST SIGN UP IN ORDER TO POST</h2>;
  return <Redirect to="/" />;
};

export default CreateHowTo;
