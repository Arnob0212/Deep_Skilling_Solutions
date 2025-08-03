import React, { useState } from "react";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {
  const [view, setView] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <button onClick={() => setView("courses")}>Show Courses</button>
      <button onClick={() => setView("books")}>Show Books</button>
      <button onClick={() => setView("blogs")}>Show Blogs</button>

      <hr />

      {view === "courses" && <CourseDetails />}
      {view === "books" && <BookDetails />}
      {view === "blogs" && <BlogDetails />}
    </div>
  );
}

export default App;
