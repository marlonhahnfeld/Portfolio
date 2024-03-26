import Card from "./Card";

const Skills =() => {
return(
    <>
    <div className="flex flex-row">
    <Card
      img="https://source.unsplash.com/random"
      title="React"
      description="Hier steht viel text, den man sehen kann"
      color="bg-blue-500"
      progressLevel="70"
    />
    <Card
      img="https://source.unsplash.com/random"
      title="Tailwindcss"
      description="Hier steht viel text, den man sehen kann"
      color="bg-blue-500"
      progressLevel="60"
    />
  </div>
  <div className="flex flex-row">
    <Card
      img="https://source.unsplash.com/random"
      title="Java"
      description="Hier steht viel text, den man sehen kann"
      color="bg-blue-500"
      progressLevel="90"
    />
    <Card
      img="https://source.unsplash.com/random"
      title="Javascript"
      description="Hier steht viel text, den man sehen kann"
      color="bg-blue-500"
      progressLevel="80"
    />
  </div>
  <div className="flex flex-row">
    <Card
      img="https://source.unsplash.com/random"
      title="Docker"
      description="Hier steht viel text, den man sehen kann"
      color="bg-blue-500"
      progressLevel="70"
    />
    <Card
      img="https://source.unsplash.com/random"
      title="Python"
      description="Hier steht viel text, den man sehen kann"
      progressLevel="70"  
    />
  </div>
  </>
);

}
export default Skills;