import {
  Grid,
  Paper,
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';

import AtCoderHandle from "../components/AtCoderHandle";
import RatingChart from "../components/RatingChart";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
}));

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
            <AtCoderHandle
              handleName={'hogehoge'}
              currentRating={2811}
            />

            <div className="last-update" align="left">
              {/* Note: dummy values. */}
              Last update: {year}/{month}/{day} {hour}:{minute}:{second}
            </div>

            {/* TODO: Enable to use rating chart as component. */}
            <div align="center">
              {RatingChart}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
