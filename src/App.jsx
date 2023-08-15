/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes, json } from "react-router-dom";

import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";

import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  // console.log(notes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main className="app w-screen h-screen flex justify-center py-3 p-2 items-center bg-gray-700 ">
      <Router>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
