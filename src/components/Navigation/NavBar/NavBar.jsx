import React from 'react';

import NavLink from '../NavLink';
import { routes } from 'routes';

import useStyles from './NavBar.styles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.NavBar}>
      {routes.map(({ path, label }) => (
        <NavLink key={path} path={path} label={label} />
      ))}
    </div>
  );
};

export default NavBar;
