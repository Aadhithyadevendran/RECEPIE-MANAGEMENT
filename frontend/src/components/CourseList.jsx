import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get("http://localhost:5000/api/courses");
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axios.delete(`http://localhost:5000/api/courses/${id}`);
        setCourses(courses.filter((course) => course._id !== id));
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="font-semibold pb-3">ALL COURSES</h1>
      {courses.map((course) => (
        <div key={course._id}>
          <h3 className="font-bold text-xl">{course.courseName}</h3>
          <p>Trainer: {course.trainer}</p>
          <p>trainees: {course.trainees}</p>
          <p>date: {course.date}</p>
          <p>batch: {course.batch}</p>
          <p>timings: {course.timings}</p>
          <p>classroom: {course.classroom}</p>
          <p>duration: {course.duration}</p>
          <p>status: {course.status}</p>
          <Link to={`/edit/${course._id}`} className="mx-5 mt-3">
            Edit
          </Link>
          <button className="mt-3" onClick={() => handleDelete(course._id)}>
            Delete
          </button>
        </div>
      ))}
      <Link to="/add">
        <button className="m-5">Add New Course</button>
      </Link>
    </div>
  );
};

export default CourseList;
