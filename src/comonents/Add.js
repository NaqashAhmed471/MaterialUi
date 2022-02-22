import { useState, forwardRef } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Container,
  TextField,
  MenuItem,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";
import { Add as AddIcon } from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
  return {
    fab: {
      position: "fixed !important",
      bottom: 20,
      right: 20,
    },
    container: {
      width: "500px !important",
      height: "500px !important",
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "100vw !important",
        height: "100vh !important",
      },
    },
    form: {
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(3),
    },
  };
});

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Add() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Tell your story"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel id="demo-radio-buttons-group-label">
                Who can comment ?
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
