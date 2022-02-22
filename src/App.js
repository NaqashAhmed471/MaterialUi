import { makeStyles } from "@mui/styles";
import Navbar from "./comonents/Navbar";
import { Grid } from "@mui/material";
import Leftbar from "./comonents/Leftbar";
import Feed from "./comonents/Feed";
import Rightbar from "./comonents/Rightbar";
import Add from "./comonents/Add";

const useStyles = makeStyles((theme) => {
  return {
    right: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
