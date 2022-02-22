import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Post from "./Post";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      paddingTop: theme.spacing(10),
    },
  };
});

function Feed() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feed;
