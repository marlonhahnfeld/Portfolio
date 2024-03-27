import SkillsTimeline from "./SkillsTimeline";

const HeroSection = () => {
  return (
    <main className="h-auto flex-grow bg-slate-950 flex flex-col justify-center items-center text-white p-4 relative">
      <h1 className="text-4xl font-bold mb-4 font-figtree mt-80">
        Hallo, ich bin
      </h1>
      <h1 className="text-4xl font-bold font-figtree  bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent bg-glow mb-96 ">
        Marlon
      </h1>

      <div className="relative flex flex-row justify-center items-center font-bold text-2xl my-12 w-full">
        <div className="w-1/2 flex flex-col items-center justify-center text-white">
        <div className="circleplustext flex justify-center items-center relative">
            <img
              src="src/assets/hand-drawn-circle-red.png"
              alt="circle"
              className="w-96 h-32"
            />
            <p className="z-10 text-4xl font-figtree absolute inset-0 flex justify-center items-center">
              Skills
            </p>
          </div>
          <SkillsTimeline />
        </div>
      </div>
      
      <p className="text-white text-4xl">Projects</p>

    </main>
  );
};

export default HeroSection;