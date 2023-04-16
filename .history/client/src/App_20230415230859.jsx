import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Job from "./Component/JobPortal/JobPortal";
import GradePortal from "./Component/GradeTracker/GradePortal";
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
        <Navbar />
        <Route path="job" element={<Job />}></Route>
        <Route path="grade" element={<GradePortal />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;