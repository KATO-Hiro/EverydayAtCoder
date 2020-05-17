import React from 'react';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

import {
  auth,
  firebase,
} from "../firebase";

import AtCoderHandle from "../components/AtCoderHandle";
import RatingChart from "../components/RatingChart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    lastUpdate: {
      align: "left",
    },
    ratingGraph: {
      align: "center",
    },
  }),
)

// TODO: Enable to login multiple provider.
const handleSignIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  auth
    .signInWithPopup(provider)
    .then(() => {
      alert("You are signed In");
    })
    .catch((error) => {
      alert("OOps something went wrong check your console");
      console.log(error);
    });
};

const handleSignout = () => {
  auth
    .signOut()
    .then(() => {
      alert("Logout successful");
    })
    .catch((error) => {
      alert("OOps something went wrong check your console");
      console.log(error);
    });
};

export default function Index() {
  const classes = useStyles();

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <button
              onClick={handleSignIn}
            >
              Sign in with Google
            </button>

            <button
              onClick={handleSignout}
            >
              Sign out
            </button>

            <AtCoderHandle
              handleName={'hogehoge'}
              currentRating={2811}
            />

            <div className={classes.lastUpdate}>
              {/* Note: dummy values. */}
              Last update: {year}/{month}/{day} {hour}:{minute}:{second}
            </div>

            {/* TODO: Enable to use rating chart as component. */}
            <div className={classes.ratingGraph}>
              {RatingChart}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
