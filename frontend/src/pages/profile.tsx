import React from 'react';
import {
  CssBaseline,
  Grid,
  Paper,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import {
  AccountCircle,
  Code,
  FiberManualRecord,
  RadioButtonUnchecked,
} from '@material-ui/icons';
import withAuth from '../helpers/withAuth';

// See:
// https://material-ui.com/components/grid/
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    }
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 750,
  },
  updated: {
    align: 'right',
  }
}));

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Paper
        className={classes.paper}
      >
        {/* Header */}
        <Typography
          variant="h4"
          align="left"
          component="h1"
          gutterBottom
        >
          Profile
        </Typography>

        <p className={classes.updated}>
          Updated on: 2020/mm/dd hh:mm:ss
        </p>

        { /* TODO: It needs to remove duplicated codes. */}
        <Grid container>
          { /* AtCoder handle name */}
          <Grid item xs={12}>
            <TextField
              id="atcoder-handle-name-read-only"
              label="AtCoder ID"
              variant="standard"
              defaultValue="tourist"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                  >
                    <AccountCircle />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
              color="secondary"
              size="medium"
            >
            </TextField>
          </Grid>

          { /* Virtual Rating */}
          <Grid item xs={12}>
            <TextField
              id="atcoder-virtual-rating"
              label="Virtual rating"
              variant="standard"
              defaultValue="4150"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                  >
                    <RadioButtonUnchecked />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
              color="secondary"
              size="medium"
            >
            </TextField>

            <TextField
              id="atcoder-virtual-rating-highest"
              label="Virtual rating (highest)"
              variant="standard"
              defaultValue="4208"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                  >
                    <FiberManualRecord />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
              color="secondary"
              size="medium"
            >
            </TextField>
          </Grid>

          { /* Main language(s) */ }
          <Grid>
            <TextField
              id="main-language"
              label="Main Language(s)"
              variant="standard"
              defaultValue="C++17, Python3, ..."
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                  >
                    <Code />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
              color="secondary"
              size="medium"
            >
            </TextField>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default withAuth(Profile);
