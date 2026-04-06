import "./App.css";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Subtitle from "./components/Subtitle";
import Section from "./components/Section";
import Welcome from "./components/Welcome";

function App() {
  const name = "Jean";

  return (
    <>
      <h1>Hola {name}</h1>
      <Welcome />
      <Title />
      <Subtitle />
      <Section />
      <Footer />
    </>
  );
}

export default App;
