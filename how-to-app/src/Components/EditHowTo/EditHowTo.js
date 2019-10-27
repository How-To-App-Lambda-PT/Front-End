//basic library/framework imports
import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Container, Form, Label, FormGroup, Input } from "reactstrap";
import Header from "../Header";
//component imports
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { UserContext, GuidesContext } from "../../contexts/index";

//initial value for the NEW how to object


const EditHowTo = props => {

  const [user] = useContext(UserContext); //Makes user context store available to validate {type: 'creator'}
  console.log('EditHowTo:', user) 
  const [guides, setGuides] = useContext(GuidesContext);

  const guide = guides[0].filter(guide => guide.id == localStorage.guideId);

  const [guideToEdit, setGuideToEdit] = useState(guide); //State for the New how-to object

  let [steps, setSteps] = useState([1]); //variable to add more steps

  useEffect(() => { 
    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides/${localStorage.guideId}`)
      .then(res => console.log(res.data))
      .catch(err => console.log('EditHowTo: useEffect: GET: err=', err))
  }, [])


  //Handles the Change that is made the values
  const HandleChange = e => {
    e.persist();

    let value = e.target.value;

    setGuideToEdit({
      ...guideToEdit,
      user_id: user.id,
      [e.target.name]: value
    });
  };

  //Handles the form when it is ready to be sent to the server
  const HandleSubmit = e => {
    e.preventDefault();

    axiosWithAuth("put", `https://bw-how-to.herokuapp.com/guides/${guide.id}`, guideToEdit)
      .then(() => {
        setGuides([...guides, guideToEdit]);
        props.history.push(`/guide/${guide.id}`);
      })
      .catch(err => console.log(guides, guideToEdit, err));
  };

  //Adds another key/value pair to the how-to object
  const addStep = e => {
    e.preventDefault();

    setSteps([...steps, steps.length + 1]);

    const key = `step_${steps.length + 1}`;

    setGuideToEdit({
      ...guideToEdit,
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
                value={guideToEdit.title}
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
                // onChange={HandleChange}
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
                value={guideToEdit[`step_${step}`]}
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

export default EditHowTo;