//basic library/framework imports
import React, { useState, useContext, useEffect } from "react";
import { Container, Form, Label, FormGroup, Input } from "reactstrap";
import Header from "../Header";
//component imports
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { UserContext } from "../../contexts/index";

//initial value for the NEW how to object


const EditHowTo = props => {

  const [user] = useContext(UserContext); //Makes user context store available to validate {type: 'creator'}

  const [guideToEdit, setGuideToEdit] = useState({}); //State for the New how-to object



  useEffect(() => {

    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides/${props.match.params.id}`)
      .then(res => {
        setGuideToEdit(res.data[0])
      })
      .catch(err => console.log('EditHowTo: useEffect: GET: err=', err))

  }, [])


  //Handles the Change that is made the values
  const HandleChange = e => {
    e.persist();

    let value = e.target.value;

    setGuideToEdit({
      ...guideToEdit,
      [e.target.name]: value
    });

  };

  //Handles the form when it is ready to be sent to the server
  const HandleSubmit = e => {
    e.preventDefault();
    guideToEdit.user_id = JSON.parse(user).id
    let newObj = {}
    for (let key in guideToEdit) {
      if (key !== 'username') {
        newObj[key] = guideToEdit[key]
      }
    }

    axiosWithAuth("put", `https://bw-how-to.herokuapp.com/guides/${newObj.id}`, newObj)
      .then(props.history.push(`/guides/${newObj.id}`))
      .catch(err => console.log(err));
  };

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
              name="type"
              onChange={HandleChange}
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
        {guideToEdit.step_1 &&
          <FormGroup className='how-to-steps'>
            <Label
              className="ht-steps-text"
              for={'step_1'}
            >{`Step 1`}</Label>
            <Input
              className="ht-step-input"
              name='step_1'
              type="textarea"
              value={guideToEdit.step_1}
              onChange={HandleChange}
            />
          </FormGroup>}
        {guideToEdit.step_2 && <FormGroup className='how-to-steps'>
          <Label
            className="ht-steps-text"
            for={'step_2'}
          >{`Step 2`}</Label>
          <Input
            className="ht-step-input"
            name='step_2'
            type="textarea"
            value={guideToEdit.step_2}
            onChange={HandleChange}
          />
        </FormGroup>}
        {guideToEdit.step_3 &&
          <FormGroup className='how-to-steps'>
            <Label
              className="ht-steps-text"
              for={'step_3'}
            >{`Step 3`}</Label>
            <Input
              className="ht-step-input"
              name='step_3'
              type="textarea"
              value={guideToEdit.step_3}
              onChange={HandleChange}
            />
          </FormGroup>}
        {guideToEdit.step_4 &&
          <FormGroup className='how-to-steps'>
            <Label
              className="ht-steps-text"
              for={'step_4'}
            >{`Step 4`}</Label>
            <Input
              className="ht-step-input"
              name='step_4'
              type="textarea"
              value={guideToEdit.step_4}
              onChange={HandleChange}
            />
          </FormGroup>}
        {guideToEdit.step_5 &&
          <FormGroup className='how-to-steps'>
            <Label
              className="ht-steps-text"
              for={'step_5'}
            >{`Step 1`}</Label>
            <Input
              className="ht-step-input"
              name='step_5'
              type="textarea"
              value={guideToEdit.step_5}
              onChange={HandleChange}
            />
          </FormGroup>}
        <button className="how-to-submit" onClick={HandleSubmit}>
          Submit
          </button>
      </Form>
    </Container>
  );
};

export default EditHowTo;