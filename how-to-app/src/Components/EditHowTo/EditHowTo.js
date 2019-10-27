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
  console.log('EditHowTo: user=', user) 
  const [guides, setGuides] = useContext(GuidesContext);

  const [guideToEdit, setGuideToEdit] = useState({}); //State for the New how-to object

  const [steps, setSteps] = useState([]); //variable to add more steps

  const convertStepsToArray = guideObj => {
    let stepArr = []
    
    for (let key in guideObj) {
      if (key.toString().includes('step_')) {
        stepArr.push(guideObj[key])
      }
    }
    console.log('convertStepsToArray: stepArr=', stepArr)
    return stepArr
  }

  useEffect(() => { 
    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides/${localStorage.guideId}`)
      .then(res => {
        console.log('EditHowTo: useEffect: GET: res.data=', res.data)
        setGuideToEdit(res.data[0])        
        setSteps(convertStepsToArray(res.data[0]))
      })
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

    axiosWithAuth("put", `https://bw-how-to.herokuapp.com/guides/${guideToEdit.id}`, guideToEdit)
      .then(() => {
        setGuides([...guides, guideToEdit]);
        props.history.push(`/guide/${guideToEdit.id}`);
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
        <h3 className="create-how-to-text">Edit How-To Guide</h3>
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
                
              >
                <option value={guideToEdit.type}></option>
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
          {steps.map((step, i) => (
            <FormGroup key={i+1} className="how-to-steps">
              <Label
                className="ht-steps-text"
                for={`Step ${i+1}`}
              >{`Step ${i+1}`}</Label>
              <Input
                className="ht-step-input"
                name={`Step ${i+1}`}
                type="textarea"
                value={step}
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