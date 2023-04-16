import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Job from "./Component/JobPortal/JobPortal";
// import AttendancePage from "./Component/attendance/attendancepage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="job" element={<Job />}></Route>
        <Route path="grade" element={<Job />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
