import React from 'react';
import {
  Collapse,
  List,
} from '@material-ui/core/';
import {
  makeStyles
} from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HistoryIcon from '@material-ui/icons/History';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import LinkIcon from '@material-ui/icons/Link';
import {
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';

import ListItemLink from './ListItemLink';
import {
  ATCODER_BASE_URL,
  CODEFORCES_ANYTIME_URL,
} from '../../utils/Url';


const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MainListItems() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return(
    <div>
      { /* Home */ }
      <ListItemLink href="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemLink>

      { /* My Profile */ }
      <ListItemLink href="profile">
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemLink>

      { /* Virtual Rating */ }
      <ListItemLink href="/">
        <ListItemIcon>
          <TrendingUpIcon />
        </ListItemIcon>
        <ListItemText primary="Virtual Rating" />
      </ListItemLink>

      { /* Contest History */ }
      <ListItemLink href="history">
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Contest History" />
      </ListItemLink>

      { /* Settings */ }
      <ListItemLink href="settings">
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemLink>

      { /* About */ }
      <ListItemLink href="/about">
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemLink>

      { /* Links */ }
      <ListItemLink onClick={handleClick}>
        <ListItemIcon>
          <LinkIcon />
        </ListItemIcon>
        <ListItemText primary="Links" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemLink>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          {/* Links: AtCoder */}
          <ListItemLink
            href={ATCODER_BASE_URL}
            className={classes.nested}
            target="_blank"
            rel="noreferrer"
          >
            <ListItemIcon>
              { /* The codes to display the AtCoder logo has not been written
                   because the use of the logo may constitute copyright
                   infringement.
               */ }
            </ListItemIcon>
            <ListItemText primary="AtCoder" />
          </ListItemLink>

          {/* Links: Codeforces Anytime */}
          <ListItemLink
            href={CODEFORCES_ANYTIME_URL}
            className={classes.nested}
            target="_blank"
            rel="noreferrer"
          >
            <ListItemIcon>
              { /* The codes to display the logo has not been written
                   because the use of the logo may constitute copyright
                   infringement.
               */ }
            </ListItemIcon>
            <ListItemText primary="Codeforces Anytime" />
          </ListItemLink>
        </List>
      </Collapse>
    </div>
  );
};
