import Card from "./components/card/Card";
import HarryPotter from "./assets/images/harry-potter-wallpaper.jpeg";
import Ron from "./assets/images/ron.jpg";
import HermioneGranger from "./assets/images/hermione-granger.jpg";
function App() {
  return (
    <>
      <div></div>
      <Card
        image={HarryPotter}
        name="Harry Potter"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, sed."
      />
      <Card
        image={Ron}
        name="Ron"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, sed."
      />
      <Card
        image={HermioneGranger}
        name="Hermione Geranger"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, sed."
      />
    </>
  );
}

export default App;
