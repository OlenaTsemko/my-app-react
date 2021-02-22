import React from 'react';

// import HomePage from 'pages/HomePage';
// import UsersPage from 'pages/UsersPage';
// import HomeWorksPage from 'pages/HomeWorksPage';
// import BooksPage from 'pages/BooksPage';
// import TestPage from 'pages/TestPage';
// import AboutPage from 'pages/AboutPage';
// import FormPage from 'pages/FormPage';

import { routes } from 'routes';

import styles from './Content.module.scss';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className={styles.Content}>
      {routes.map(
        ({ path, component: Component }) =>
          pathname === path && <Component key={path} />,
      )}

      {/* {pathname === '/' && <HomePage />}
      {pathname === '/users-page' && <UsersPage />}
      {pathname === '/home-works' && <HomeWorksPage />}
      {pathname === '/books' && <BooksPage />}
      {pathname === '/test' && <TestPage />}
      {pathname === '/about' && <AboutPage />}
      {pathname === '/form' && <FormPage />} */}
    </div>
  );
};

export default Content;
