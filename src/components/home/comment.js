import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import React from "react";
import axios from 'axios';

class CommentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data:  props.data };
    console.log(this.state)

    this.refreshPage = () => {
      window.location.reload(false);

    }

    this.handle_delete = ()=>{
      //console.log(this.state.data.id)
      axios.delete("http://localhost:3000/comments/"+this.state.data.id)
      this.refreshPage();
    }
  }
  render() {
     
    return (
      <Grid item xs={12} md={3}>
          <Card sx={{ maxWidth: 345 }} gutterBottom>
          
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {this.state.data.firstname} {this.state.data.surname}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {this.state.data.phoneNumber} 
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {this.state.data.email} 
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {this.state.data.message}
              </Typography>
            </CardContent>
          
          <CardActions>
            <Button size="small" color="warning" onClick = {this.handle_delete}   >
              Delete
            </Button>
          </CardActions>
        </Card>
        </Grid>
    );
  }
}


export default CommentCard;