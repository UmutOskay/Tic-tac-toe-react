import React from 'react'
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';

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
        primaryKey: 0
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
  
      const randomValue = Math.floor((Math.random() * 100) + 1);
  
      var student = {
        "primary key": randomValue,
        "firstname": name,
        "surname": surname,
        "email": email,
        "phoneNumber": phoneNumber,
        "message": message
      }
      localStorage.setItem(randomValue, JSON.stringify(student));
      
  
    }
    

   render() {
      return <div id="form">
         <Form onSubmit={this.contactSubmit.bind(this)}>
      <h1>Feedback</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label for="name">Name</Form.Label>
    <Form.Control type="name" onChange={evt => this.setState({ name: evt.target.value })} placeholder="Enter name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicSurname">
    <Form.Label for="surname">Surname</Form.Label>
    <Form.Control type="name" onChange={evt => this.setState({ surname: evt.target.value })} placeholder="Enter surname" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label for="email">Email address</Form.Label>
    <Form.Control type="email"onChange={evt => this.setState({ email: evt.target.value })} placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
    <Form.Label for="phoneNumber">Phone Number</Form.Label>
    <Form.Control type="phoneNumber" onChange={evt => this.setState({ phoneNumber: evt.target.value })} placeholder="Phone Number" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicMessage">
    <Form.Label for="message">Message</Form.Label>
    <Form.Control type="TextField" onChange={evt => this.setState({ message: evt.target.value })} placeholder="Message" rows="4" cols="50" maxLength="250"/>
  </Form.Group>

  <Button variant="primary" type="submit" onClick={this.handleSubmit}>
    Submit
  </Button>
</Form>
      </div>



   }
}

/*
function Feedback() {
   const [name, setName] = useState();
   const [surname, setSurname] = useState();
   const [email, setEmail] = useState();
   const [phone, setPhone] = useState();
   const [vibe, setVibe] = useState();
   const [message, setMessage] = useState();
   function name_set(e){
    setName(e.target.value)
   }
   function surname_set(e){
    setSurname(e.target.value)
   }
   function email_set(e){
    setEmail(e.target.value)
   }
   function phone_set(e){
    setPhone(e.target.value)
   }
   function message_set(e){
    setMessage(e.target.value)
   }
   function vibe_set(e){
       setVibe(e.target.value)
   }
   function send(e){
    e.preventDefault()
    var comment = {
        
        "name": name,
        "surname": surname,
        "emailAddress": email,
        "vibe":vibe,
        "phone": phone,
        "message": message
    }
    axios.post("http://localhost:3000/comments",comment).then(
                
      )
      axios.get("http://localhost:3000/comments").then(
        res =>{
            console.log(res.data)
            sessionStorage.setItem("comments", JSON.stingify(res.data))
        }
    )
   }

   useEffect(()=>{
    sessionStorage.setItem("vibe",vibe)
  }, []);
  
      return (
        <div>
          
          <Container component="main" maxWidth="xs" >
              
              <Box
               component="form"
               sx={{
                 '& .MuiTextField-root': { m: 1, width: '25ch' },
               }}
               noValidate
               autoComplete="off"
              >
                
                <Typography component="h1" variant="h5">
                  Feedback Form
                </Typography>
                <FormControl>
                <FormGroup>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue=""
                    value={name}
                    onChange={name_set}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Surname"
                    defaultValue=""
                    value={surname}
                    onChange={surname_set}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    value={email}
                    onChange={email_set}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Phone number"
                    defaultValue=""
                    value={phone}
                    onChange={phone_set}
                />
                <Select
                   labelId="isPositive"
                  
                   value={vibe}
                   label="Your message is"
                   onChange={vibe_set}
                 >
                   <MenuItem value={0}>Positive</MenuItem>
                   <MenuItem value={1}>Negative</MenuItem>
                   
                 </Select>
                            <TextField
                   required
                   id="outlined-required"
                   label="Your message"
                   defaultValue=""
                   multiline
                   rows={4}
                   value={message}
                   onChange={message_set}
                   />
                <Button variant='outlined' onClick={send}>Send</Button>
                </FormGroup>
                </FormControl>
                
              </Box>   
              
      
              
            </Container>
         
        </div>
        // name surname ,phone number ,mail, textbox
      )
    }*/

export default Feedback