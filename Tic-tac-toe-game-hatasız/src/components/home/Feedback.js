import React from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import { useState, useEffect } from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from "axios"

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
    }

export default Feedback