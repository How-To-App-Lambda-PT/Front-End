//basic library/framework imports
import React, { useState, useContext } from "react";
import axios from "axios";
import { Container, Form, Label, FormGroup, Input } from "reactstrap";

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

  //   if (user.type === "creator") {
  // the form where data will be inputed
  return (
    <Container className="create-how-to-cont">
      <header className="login-header">
        <h4 className="login-logo">How-To</h4>
      </header>
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
            <Label for="type">Category</Label>
            <Input
              className="ht-title-input"
              type="select"
              name="type"
              onChange={HandleChange}
            >
              <option value="selected"></option>
              <option value="cars">Cars and Other Vehices</option>
              <option value="computers">Computers and Electronics</option>
              <option value="food">Food and Cooking</option>
              <option value="finance">Finance and Business></option>
              <option value="hobbies">Hobbies and Craft</option>
              <option value="home">Home and Garden</option>
              <option value="lifeHacks">Life Hacks</option>
            </Input>
          </div>
        </FormGroup>
        <FormGroup className="how-to-skills-tools">
          <Label for="description">Skills Required</Label>
          <Input
            name="description"
            type="textarea"
            value={newHowTo.description}
            onChange={HandleChange}
          />

          <Label for="tools">Tools Required</Label>
          <Input
            name="tools"
            type="textarea"
            value={newHowTo.tools}
            onChange={HandleChange}
          />
        </FormGroup>
        {steps.map(step => (
          <FormGroup className="how-to-steps">
            <Label for={`step_${step}`}>{`step ${step}`}</Label>
            <Input
              name={`step_${step}`}
              type="textarea"
              value={newHowTo[`step_${step}`]}
              onChange={HandleChange}
            />
          </FormGroup>
        ))}
        <button className="btn-add-step" onClick={addStep}>
          add next step
        </button>
        <button className="how-to-submit" onClick={HandleSubmit}>
          Submit
        </button>
      </Form>
    </Container>
  );
};
// return <h2>MUST SIGN UP IN ORDER TO POST</h2>;
// };

export default CreateHowTo;
