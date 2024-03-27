import Skills from "./Skills";

const HeroSection = () => {
  return (
    <main className="h-auto flex-grow bg-slate-950 flex flex-col justify-center items-center text-white p-4">
      <h1 className="text-4xl font-bold mb-4 font-figtree mt-80">
        Hallo, ich bin
      </h1>
      <h1 className="text-4xl font-bold font-figtree  bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent bg-glow mb-96 hover:text-white">
        Marlon
      </h1>

      <div className="relative flex justify-center items-center text-green-400 font-bold text-2xl my-12 w-64">
        <img
          src="src/assets/hand-drawn-circle-red.png"
          alt="circle"
          className="absolute"
        />
        <p className="z-10 text-4xl font-figtree">Techstack</p>
      </div>
      <Skills />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-64">
        Click me
      </button>
    </main>
  );
};

export default HeroSection;
