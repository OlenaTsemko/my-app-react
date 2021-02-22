import React from 'react';

import HomePage from 'pages/HomePage';
import UsersPage from 'pages/UsersPage';
import HomeWorksPage from 'pages/HomeWorksPage';
import BooksPage from 'pages/BooksPage';
import TestPage from 'pages/TestPage';
import AboutPage from 'pages/AboutPage';
import FormPage from 'pages/FormPage';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="Content">
      {pathname === '/' && <HomePage />}
      {pathname === '/users-page' && <UsersPage />}
      {pathname === '/home-works' && <HomeWorksPage />}
      {pathname === '/books' && <BooksPage />}
      {pathname === '/test' && <TestPage />}
      {pathname === '/about' && <AboutPage />}
      {pathname === '/form' && <FormPage />}
    </div>
  );
};

export default Content;
