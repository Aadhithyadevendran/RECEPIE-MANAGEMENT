import React, { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [course, setCourse] = useState({
    courseID: "",
    courseName: "",
    trainer: "",
    trainees: "",
    date: "",
    batch: "",
    timings: "",
    classroom: "",
    duration: "",
    status: "",
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/courses", course);
      alert("Course added successfully!");
      setCourse({
        courseID: "",
        courseName: "",
        trainer: "",
        trainees: "",
        date: "",
        batch: "",
        timings: "",
        classroom: "",
        duration: "",
        status: "",
      });
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="courseID"
        placeholder="Course ID"
        value={course.courseID}
        onChange={handleChange}
        required
      />
      <input
        name="courseName"
        placeholder="Course Name"
        value={course.courseName}
        onChange={handleChange}
        required
      />
      <input
        name="trainer"
        placeholder="Trainer"
        value={course.trainer}
        onChange={handleChange}
        required
      />
      <input
        name="trainees"
        placeholder="Trainees (comma-separated)"
        value={course.trainees}
        onChange={handleChange}
      />
      <input
        name="date"
        type="date"
        value={course.date}
        onChange={handleChange}
        required
      />
      <input
        name="batch"
        placeholder="Batch"
        value={course.batch}
        onChange={handleChange}
      />
      <input
        name="timings"
        placeholder="Timings"
        value={course.timings}
        onChange={handleChange}
      />
      <input
        name="classroom"
        placeholder="Classroom"
        value={course.classroom}
        onChange={handleChange}
      />
      <input
        name="duration"
        placeholder="Duration"
        value={course.duration}
        onChange={handleChange}
      />
      <input
        name="status"
        placeholder="Status"
        value={course.status}
        onChange={handleChange}
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourse;
