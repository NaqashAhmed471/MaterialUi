import { makeStyles } from "@mui/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material/";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      marginBottom: theme.spacing(5),
    },
    media: {
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
    },
  };
});

function Post() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        height="250"
        className={classes.media}
        image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="My Post"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          My First Post
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quos
          mollitia vel dolorum, alias, aspernatur ut illum iusto quibusdam ex
          consectetur, quo enim temporibus debitis. Veritatis quam laborum omnis
          itaque? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nihil quos mollitia vel dolorum, alias, aspernatur ut illum iusto
          quibusdam ex consectetur, quo enim temporibus debitis. Veritatis quam
          laborum omnis itaque
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
