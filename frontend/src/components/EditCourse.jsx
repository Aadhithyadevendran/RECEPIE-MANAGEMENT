import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/courses/${id}`
      );
      setCourse(response.data);
    };
    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/courses/${id}`, course);
      alert("Course updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        placeholder="trainees"
        value={course.trainees}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        placeholder="date"
        value={course.date}
        onChange={handleChange}
        required
      />
      <input
        name="batch"
        placeholder="batch"
        value={course.batch}
        onChange={handleChange}
        required
      />
      <input
        name="timings"
        placeholder="timings"
        value={course.timings}
        onChange={handleChange}
        required
      />
      <input
        name="classroom"
        placeholder="classroom"
        value={course.classroom}
        onChange={handleChange}
        required
      />
      <input
        name="duration"
        placeholder="duration"
        value={course.duration}
        onChange={handleChange}
        required
      />
      <input
        name="status"
        placeholder="status"
        value={course.status}
        onChange={handleChange}
        required
      />
      {/* Add other fields similar to AddCourse */}
      <button type="submit">Update Course</button>
    </form>
  );
};

export default EditCourse;
