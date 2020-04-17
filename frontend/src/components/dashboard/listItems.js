import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HistoryIcon from '@material-ui/icons/History';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import LinkIcon from '@material-ui/icons/Link';

// See:
// https://github.com/anasyusef/Society-app-react-rails/blob/8cc416446392411f4598f5ed1484911f7a7693ec/app/javascript/components/Dashboard/Dashboard.jsx
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
  <div>
    <ListItemLink href="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemLink>
    <ListItemLink href="profile">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemLink>
    <ListItemLink href="/">
      <ListItemIcon>
        <TrendingUpIcon />
      </ListItemIcon>
      <ListItemText primary="Virtual Rating" />
    </ListItemLink>
    <ListItemLink href="history">
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Contest History" />
    </ListItemLink>
    <ListItemLink href="settings">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemLink>
    <ListItemLink href="/about">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItemLink>
    <ListItemLink href="links">
      <ListItemIcon>
        <LinkIcon />
      </ListItemIcon>
      <ListItemText primary="Links" />
    </ListItemLink>
  </div>
);
