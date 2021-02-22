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

export default useStyles;
