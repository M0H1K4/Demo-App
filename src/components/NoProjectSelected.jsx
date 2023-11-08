import React from "react";
import image from '../assets/no-projects.png';

export default function NoProjectSelected() {
  return (
    <div className="mt-2 text-center w-2/3">
      <img src={image} alt="Carieli" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">No Projects Selected</h2>
      <p className="text-stone-400">Select a project or get started with new one</p>
      <p>
        <button>Create new project</button>
      </p>
    </div>
  );
}
