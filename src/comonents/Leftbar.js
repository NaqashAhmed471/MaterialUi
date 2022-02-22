import { makeStyles } from "@mui/styles";
import { Container, Typography, IconButton } from "@mui/material";
import {
  Home,
  Person,
  List,
  PhotoCamera,
  PlayCircleOutline,
  TabletMac,
  Bookmark,
  Storefront,
  Settings,
  ExitToApp,
} from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "100vh",
      color: "white",
      paddingTop: theme.spacing(10),
      backgroundColor: theme.palette.primary.main,
      position: "sticky",
      top: 0,
      [theme.breakpoints.up("sm")]: {
        backgroundColor: "white",
        color: "#555",
        border: "1px solid #ece7e7",
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(3),
        cursor: "pointer",
      },
    },
    icon: {
      marginRight: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        "& svg": {
          fontSize: 18,
        },
      },
    },
    text: {
      fontWeight: "500 !important",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
});

function Leftbar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <IconButton aria-label="Home" className={classes.icon}>
          <Home />
        </IconButton>
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <IconButton aria-label="Person" className={classes.icon}>
          <Person />
        </IconButton>
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <IconButton aria-label="List" className={classes.icon}>
          <List />
        </IconButton>
        <Typography className={classes.text}>List</Typography>
      </div>
      <div className={classes.item}>
        <IconButton aria-label="PhotoCamera" className={classes.icon}>
          <PhotoCamera />
        </IconButton>
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <IconButton aria-label="PlayCircleOutline" className={classes.icon}>
          <PlayCircleOutline />
        </IconButton>
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <IconButton aria-label="TabletMac" className={classes.icon}>
          <TabletMac />
        </IconButton>
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <IconButton aria-label="Bookmark" className={classes.icon}>
          <Bookmark />
        </IconButton>
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <IconButton aria-label="Storefront" className={classes.icon}>
          <Storefront />
        </IconButton>
        <Typography className={classes.text}> Market Place</Typography>
      </div>
      <div className={classes.item}>
        <IconButton aria-label="Settings" className={classes.icon}>
          <Settings />
        </IconButton>
        <Typography className={classes.text}> Settings</Typography>
      </div>
      <div className={classes.item}>
        <IconButton aria-label="ExitToApp" className={classes.icon}>
          <ExitToApp />
        </IconButton>
        <Typography className={classes.text}> Logout</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
