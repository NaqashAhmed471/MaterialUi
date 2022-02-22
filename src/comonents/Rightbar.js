import { makeStyles } from "@mui/styles";
import { Container, Typography, Avatar, AvatarGroup } from "@mui/material";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      paddingTop: theme.spacing(10),
    },
    title: {
      fontSiza: "16px !important",
      fontWeight: "500 !important",
      color: "#555",
    },
    avatar: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };
});

function Rightbar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>
        Online Friends
      </Typography>
      <AvatarGroup max={4} className={classes.avatar}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </Container>
  );
}

export default Rightbar;
