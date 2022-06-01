import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import DevMembers from "../components/developer/DevMembers";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  teamContainer: {
    display: "flex",
    width: "100vw",
  },
}));

export const CommentsPage = () => {
  const classes = useStyles();
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  
  return (
    <div className={classes.teamContainer}>
      <Grid item={true} xs={1} md={2} />
      <Grid item={true} xs={10} md={8}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1> Comments </h1>
    {console.log(post, typeof(post))}
    <div >
      <table >
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Comments</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>Oskay</td>
          <td>Like</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>Yeniçeri</td>
          <td>Like</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>Mali</td>
          <td>Didn't like</td>
        </tr>
      </table>
    </div>


      </Grid>
      <Grid item={true} xs={1} md={2} />
    </div>
  );
};

export default CommentsPage;