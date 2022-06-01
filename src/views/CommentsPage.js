import React from "react";
import { Grid } from "@material-ui/core";
import axios from "axios"
import CommentCard from "../components/home/comment";

class CommentsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };

    axios.get("http://localhost:3000/comments").then((response) =>{
    this.setState({comments: response.data})}
    );

}

  render() {
    return (
     <>
     <h1> Comments </h1>
     <Grid container spacing={10} >
       
      {table_filler(this.state.comments)}
        
    </Grid>
    </>
    );
  }
}
function table_filler(data){
  let items = [];
  
      for(var i = 0; i < data.length; i++){
        items.push(
         <CommentCard  data={data[i]} />
          );
        }

    return items;
}


export default CommentsPage;
