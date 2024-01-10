import About from 'pages/about/About';
import Home from 'pages/home/Home';
import NotFound from 'pages/not-found/NotFound';
import Projects from 'pages/projects/Projects';
import Stack from 'pages/stack/Stack';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
  PROJECTS_ROUTE,
  STACK_ROUTE,
} from 'utils/consts';
const AppRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />}></Route>
      <Route path={ABOUT_ROUTE} element={<About />}></Route>
      <Route path={STACK_ROUTE} element={<Stack />}></Route>
      <Route path={PROJECTS_ROUTE} element={<Projects />}></Route>
      <Route path={NOT_FOUND_ROUTE} element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRouter;
