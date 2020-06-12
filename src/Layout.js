import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import SwipeableViews from 'react-swipeable-views'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      width: 400
    }
  },
  footer: {

  }
}));

export default function Layout ({ children }) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideIndexChange = index => {
    setSlideIndex(index);
  };

  const mobileDrawer = (
    <Drawer
      open={drawerOpen}
      onClose={() => setDrawerOpen(!drawerOpen)}
    >
      <List>
        <ListItem>
          <Link component={RouterLink} to="/home" >Home</Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="/about" >About</Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="/testimonials" >Testimonials</Link>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              onClick={() => setDrawerOpen(!drawerOpen)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {mobileDrawer}
          </Hidden>

          <Typography variant="h6" className={classes.title}>
            Rayban Sunglasses
          </Typography>
          <Hidden smDown>
            <Box ml={2}>
              <Link
                component={RouterLink}
                to="/home"
                color="inherit"
              >
                Home
              </Link>
            </Box>
            <Box ml={2}>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
              >
                About
              </Link>
            </Box>
            <Box ml={2}>
              <Link
                component={RouterLink}
                to="/testimonials"
                color="inherit"
              >
                Testimonials
              </Link>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Box m={2}>
        <SwipeableViews
          enableMouseEvents
          index={slideIndex}
          onChangeIndex={handleSlideIndexChange}
        >
          <div className={`${classes.slide} ${classes.slide1}`}>
            <img src="https://cdn.eyerim.com/media/catalog/product/cache/shared/image/9df78eab33525d08d6e5fb8d27136e95/s/r/sryb-g000026-m000091-bi-1.jpg" />
          </div>
          <div className={`${classes.slide} ${classes.slide2}`}>
            <img src="https://cdn.eyerim.com/media/catalog/product/cache/shared/image/9df78eab33525d08d6e5fb8d27136e95/s/r/sryb-g000026-m000091-bi-2.jpg" />
          </div>
          <div className={`${classes.slide} ${classes.slide3}`}>
            <img src="https://cdn.eyerim.com/media/catalog/product/cache/shared/image/9df78eab33525d08d6e5fb8d27136e95/s/r/sryb-g000026-m000091-bi-3.jpg" />
          </div>
        </SwipeableViews>
        <Tabs
          value={slideIndex}
          fullWidth
          onChange={(event, value) => handleSlideIndexChange(value)}
          centered
        >
          <Tab label="Slide1" />
          <Tab label="Slide2" />
          <Tab label="Slide3" />
        </Tabs>

        {children}
      </Box>
      <Box
        className={classes.footer}
        m={2}
        display="flex"
        justifyContent="center"
      >
        <Typography variant="caption">Sunglasses demo page &copy; 2020</Typography>
      </Box>
    </div>
  );
}
