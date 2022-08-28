
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApplicationRouteList } from './ApplicationRouter';

const ApplicationRouter = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Router>
        <Routes>
          {ApplicationRouteList.map((route) => {
            return (
              <Route key={route.path} path={route.path} element={route.element}></Route>
            )
          })}
        </Routes>
      </Router>
    </Suspense>
  )
}

export default ApplicationRouter;
