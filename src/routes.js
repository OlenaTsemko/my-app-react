import HomePage from 'pages/HomePage';
import UsersPage from 'pages/UsersPage';
import HomeWorksPage from 'pages/HomeWorksPage';
import BooksPage from 'pages/BooksPage';
import TestPage from 'pages/TestPage';
import AboutPage from 'pages/AboutPage';
import FormPage from 'pages/FormPage';
import CounterPage from 'pages/CounterPage';
import TodoListPage from 'pages/TodoListPage';

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    path: '/users-page',
    label: 'Users',
    component: UsersPage,
  },
  {
    path: '/home-works',
    label: 'Home Works',
    component: HomeWorksPage,
  },
  {
    path: '/books',
    label: 'Books',
    component: BooksPage,
  },
  {
    path: '/test',
    label: 'Test',
    component: TestPage,
  },
  {
    path: '/todos',
    label: 'Todos',
    component: TodoListPage,
  },
  {
    path: '/form',
    label: 'Form',
    component: FormPage,
  },
  {
    path: '/counter',
    label: 'Counter',
    component: CounterPage,
  },
  {
    path: '/about',
    label: 'About',
    component: AboutPage,
  },
];
