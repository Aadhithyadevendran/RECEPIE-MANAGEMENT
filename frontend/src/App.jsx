import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";
import CourseList from "./components/CourseList";
import SearchCourses from "./components/SearchCourses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/add" element={<AddCourse />} />
        <Route path="/edit/:id" element={<EditCourse />} />
        <Route path="/search" element={<SearchCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
