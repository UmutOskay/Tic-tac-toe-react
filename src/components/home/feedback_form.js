import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import handleValidation from '../../validation.js';

class Feedback extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  contactSubmit(e) {

    e.preventDefault();
    if (handleValidation(this.state.name, this.state.surname, this.state.email, this.state.phoneNumber)) {
      alert("Form submitted");
    } else {
      alert("Form has errors.")
    }

  }

  handleSubmit = e => {
    const { name, surname, email, phoneNumber, message } = this.state;

    var form_data = {
      "firstname": name,
      "surname": surname,
      "email": email,
      "phoneNumber": phoneNumber,
      "message": message
    }
    //localStorage.setItem(randomValue, JSON.stringify(student));
    
    if(form_data.firstname !== "" || form_data.surname !== "" || form_data.email !== "" || form_data.phoneNumber !== "" || form_data.message !==""){
      axios.post("http://localhost:3000/comments", form_data).then()
    }
  }
  
  render() {
    return (

    <div id="form">
      <Form onSubmit={this.contactSubmit.bind(this)}>

        <h1>Feedback</h1>

        <Form.Group className = "mb-3" controlId="formBasicName">
          <Form.Label for =" name">Name</Form.Label>
          <Form.Control type = "name" onChange={evt => this.setState({ name: evt.target.value })} placeholder="Enter name" />
        </Form.Group>

        <Form.Group className = "mb-3" controlId="formBasicSurname">
          <Form.Label for = "surname">Surname</Form.Label>
          <Form.Control type = "name" onChange={evt => this.setState({ surname: evt.target.value })} placeholder="Enter surname" />
        </Form.Group>

        <Form.Group className = "mb-3" controlId="formBasicEmail">
          <Form.Label for = "email">Email address</Form.Label>
          <Form.Control type = "email" onChange={evt => this.setState({ email: evt.target.value })} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className = "mb-3" controlId="formBasicPhoneNumber">
          <Form.Label for = "phoneNumber">Phone Number</Form.Label>
          <Form.Control type = "phoneNumber" onChange={evt => this.setState({ phoneNumber: evt.target.value })} placeholder="Phone Number" />
        </Form.Group>

        <Form.Group className = "mb-3" controlId="formBasicMessage">
          <Form.Label for = "message">Message</Form.Label>
          <Form.Control type = "TextField" onChange={evt => this.setState({ message: evt.target.value })} placeholder="Message" rows="4" cols="50" maxLength="250"/>
        </Form.Group>

        <Button variant = "primary" type = "submit" onClick={this.handleSubmit} >
          Submit
        </Button>

      </Form>
    </div>

    )
  }
}
export default Feedback
