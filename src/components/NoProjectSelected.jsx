import React from "react";
import image from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected() {
  return (
    <div className="mt-[150px] ml-[50px] text-center w-2/3">
      <img
        src={image}
        alt="Carieli"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Projects Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
}
