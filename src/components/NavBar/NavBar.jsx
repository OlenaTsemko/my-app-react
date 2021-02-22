import React from 'react';

import NavLink from './NavLink';
import { routes } from 'routes';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  NavBar: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #000',
    listStyle: 'none',
    margin: 0,
    padding: 10,
    width: 200,
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.NavBar}>
      {routes.map(({ path, label }) => (
        <NavLink path={path} label={label} />
      ))}
    </div>
  );
};

export default NavBar;
