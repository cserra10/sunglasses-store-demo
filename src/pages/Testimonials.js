import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>Testimonials</Typography>
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary="Tony Stark"
          secondary="Spidey is great"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary="Thor"
          secondary="I really like beer"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary="Hulk"
          secondary="scarlett is my waifu"
        />
      </ListItem>
    </List>
  );
}
