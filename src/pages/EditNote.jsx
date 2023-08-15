/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  // console.log(id);
  const note = notes.find((item) => item.id == id);
  // console.log(note);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete ?")) {
      const newNotes = notes.filter((item) => item.id != id);

      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section className=" w-full lg:w-1/2 flex justify-center items-center gap-4 flex-col md:w-[80%] sm:w-[90%] p-6 bg-[#141313] rounded-md sm:w-[90%]">
      <header className="create_note_header flex justify-between items-center w-full">
        <Link
          to={"/"}
          className="rounded-md bg-transparent text-white p-3 font-extrabold text-lg border-[2px] border-[#ffffff31] border-solid"
        >
          <IoIosArrowBack />
        </Link>
        <div className="flex gap-1 items-center">
          <button
            onClick={handleForm}
            className="rounded-md bg-transparent text-white px-4 py-2 border-[2px] border-[#ffffff31] border-solid"
          >
            Save
          </button>
          <button
            onClick={handleDelete}
            className="rounded-md bg-gradient-to-br from-[#43CBFF] to-[#9708CC] text-white p-3"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </header>
      <form
        onSubmit={handleForm}
        className="create_note_form w-full gap-3 flex mt-3 flex-col items-center justify-center"
      >
        <input
          type="text"
          // placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          className="w-full outline-none p-4 text-2xl text-white bg-[#ffffff03] rounded-t-md border-[1px] border-[#ffffff1a] border-solid lg:text-[20px] md:text-[18px] sm:text-[18px] text-[16px]"
        />
        <hr />
        <textarea
          rows="10"
          // placeholder="Notes Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full outline-none text-white p-4 bg-[#ffffff03] resize-none rounded-b-md border-[1px] border-[#ffffff1a] border-solid lg:text-[18px] md:text-[16px] sm:text-[16px] text-[14px]"
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
