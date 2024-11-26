import React, { useState } from "react";
import axios from "axios";

const SearchCourses = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/courses/search?query=${query}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error searching courses:", error);
    }
  };

  return (
    <div>
      <input
        placeholder="Search by Trainer, Trainee, or Course Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((course) => (
          <div key={course._id}>
            <h3>{course.courseName}</h3>
            <p>Trainer: {course.trainer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCourses;
