import React, { lazy } from "react";
import { Test1Route1, Test1Route2 } from "./Route.Constant";


const Test1Container = lazy(() => import('../Component/Test1/Test1.container'));
const Test2Container = lazy(() => import('../Component/Test2/Test2.container'));


const ApplicationRouteList = [
  { path: '/', element: <Test1Container /> },
  { path: Test1Route1, element: <Test2Container /> },
  { path: Test1Route2, element: <Test1Container /> },
]

export { ApplicationRouteList }