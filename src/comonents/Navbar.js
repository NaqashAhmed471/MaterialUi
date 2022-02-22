import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Badge,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    toolBar: {
      display: "flex",
      justifyContent: "space-between",
    },
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        display: (props) => (props.open ? "flex" : "none"),
      },
    },
    input: {
      color: "white",
      marginLeft: theme.spacing(2),
    },
    cancelButton: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    icons: {
      display: (props) => (props.open ? "none" : "flex"),
      alignItems: "center",
    },
    searchButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    badge: {
      marginRight: theme.spacing(2),
    },
  };
});

function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.logoLg}>
          Lama Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LAMA
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search..." className={classes.input} />
          <CancelIcon
            className={classes.cancelButton}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={classes.icons}>
          <SearchIcon
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
