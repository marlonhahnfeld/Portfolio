
import Skills from "./Skills";

const HeroSection = () => {
  return (
    <main className="h-auto flex-grow bg-slate-950 flex flex-col justify-center items-center text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Hallo, ich bin Marlon</h1>
      <h2 className="text-2xl font-bold mb-4">
        ich bin ein passionierter Fullstack Developer
      </h2>

      <div className="relative flex justify-center items-center text-green-400 font-bold text-2xl my-10">
  <img src="src/assets/hand-drawn-circle-red.png" alt="circle" className="absolute" />
  <p className="z-10">Mein Techstack</p>
</div>
      <Skills />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Click me
      </button>
    </main>
  );
};

export default HeroSection;
