import NavBar from 'components/NavBar';
import Content from 'components/Content';
import styles from './app.module.scss';

const App = () => (
  <div className={styles.App}>
    <NavBar />
    <Content />
  </div>
);

export default App;
