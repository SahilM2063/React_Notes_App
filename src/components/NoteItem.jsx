/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link
      to={`edit-note/${note.id}`}
      className="note bg-gradient-to-r from-[#222] to-[#1e1e1e1a] lg:p-4 md:p-4 sm:p-2 p-1 rounded-md flex flex-col justify-between items-start border-[1px] border-[#ffffff0a] border-solid h-[150px]"
    >
      <h4 className="text-[#FFF] lg:text-xl md:text-lg sm:text-sm text-xs">
        {note.title.length > 20 ? note.title.substr(0, 20) + "..." : note.title}
      </h4>
      <p className="text-[rgba(255,255,255,0.50)] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">{note.date}</p>
    </Link>
  );
};

export default NoteItem;
