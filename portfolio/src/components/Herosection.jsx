// HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <main className="h-auto flex-grow bg-slate-950 flex flex-col justify-center items-center text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Hallo, ich bin Marlon</h1>
      <h2 className="text-2xl font-bold mb-4">
        ich bin ein passionierter Fullstack Developer
      </h2>
      <div className="h-96 w-96 bg-white bg-opacity-20 my-10 rounded-xl px-8 py-8 backdrop-blur-md">
        <p className="text-center font-bold text-xl">
          Hier könnte dein Content stehen
        </p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Click me
      </button>
      <p className="w-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Sed euismod, nunc id aliquet tincidunt, nisl nunc tincidunt urna, id
        lacinia nunc nisl id nunc. Sed euismod, nunc id aliquet tincidunt, nisl
        nunc tincidunt urna, id lacinia nunc nisl id nunc.
      </p>
    </main>
  );
};

export default HeroSection;
