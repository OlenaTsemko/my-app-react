import PropTypes from 'prop-types';

import useStyles from './NavLink.styles';

const NavLink = ({ path, label }) => {
  const { pathname } = window.location;
  const classes = useStyles();

  return (
    <a
      className={[
        classes.link,
        pathname === path ? classes.activeLink : '',
      ].join(' ')}
      href={path}
    >
      {label}
    </a>
  );
};

NavLink.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

export default NavLink;
