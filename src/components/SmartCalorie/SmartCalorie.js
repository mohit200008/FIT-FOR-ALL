import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import './SmartCalories.scss';
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import SmartCalorieCalc from "./CalorieCalc";
import UserContext from "../../context/UserContext";

import FoodCalc from "./FoodCalc/FoodCalc"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    maxWidth: 245,
  },
  media: {
    height: 245,
    width: 245,
    zIndex: 99,
  },
  rootDiv: {
    padding: theme.spacing(2),
  },
  logoutBTN: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    marginRight: 20,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Exercise() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { userData } = useContext(UserContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.rootDiv}>
      <Card className={classes.root} style={{maxWidth: "1580px"}}>
        <CardActionArea onClick={handleClickOpen} >
          <CardContent style={{marginRight: "300px"}}>
          <div className="about-section">
                <div className="inner-container">
                    <h1>Smart Calorie Calculator</h1>
                    <h2>Stay fit and Healthy</h2>
                    <p className="text">
                       Calculate the number of calories burned with our smart calorie calculator, which uses ML(Tensorflow) for predicting your body movement and then calculating the amount of calorie burned during the movement.
            </p>
                </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar} color="secondary" style={{backgroundColor: "#242222"}}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Smart Calorie Calculator
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <SmartCalorieCalc open={open} />
      </Dialog>
      <FoodCalc />
    </div>
  );
}
