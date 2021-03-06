import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './style.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  fabButton: {
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  navBar: {
    position: 'adsolute',
    width: '100%',
    zIndex: '1000',
  },

}));
export function Navbar() {

  const history = useHistory();
  const handleClick = () => history.push('/newProduct');

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.Navbar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Extendeal-Challege
          </Typography>         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <Button color="primary" onClick={handleClick} >
                  <AddIcon />
                </Button>
              </Fab>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}