import React from 'react';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import {
  Button,
  CssBaseline,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  lightGreen,
  red,
} from '@material-ui/core/colors';
import {
  AccountCircle,
  Save,
} from '@material-ui/icons';

// See:
// https://material-ui.com/components/text-fields/
// https://material-ui.com/components/buttons/
// https://codesandbox.io/s/9ywq085k9w?file=/src/index.js
const useStyles = makeStyles((theme) =>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: red,
  },
});

export default function Settings() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Typography
        variant="h4"
        align="left"
        component="h1"
        gutterBottom
      >
        Settings
      </Typography>

      <Paper>
        <Grid container>
          {/* AtCoder handle name */}
          <Grid item xs={12}>
            <form
              className={classes.root}
              noValidate
              autoComplete="on"
            >
              <TextField
                id="atcoder-handle-name"
                label="AtCoder ID"
                variant="standard"
                placeholder="tourist"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                    >
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                color="secondary"
                size="medium"
              >
              </TextField>
            </form>

          </Grid>

          {/* Cancel button */}
          <Grid
            item
            style={{ marginTop: 16}}
          >
            <ThemeProvider theme={theme}>
              <Button
                className={classes.margin}
                variant="contained"
                color="secondary"
                size="small"
              >
                Cancel
              </Button>
            </ThemeProvider>
          </Grid>

          {/* Save button */}
          <Grid
            item
            style={{ marginTop: 16}}
          >
            <ThemeProvider theme={theme}>
              <Button
                className={classes.margin}
                variant="contained"
                color="primary"
                size="small"
                startIcon={<Save />}
              >
                Save
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
