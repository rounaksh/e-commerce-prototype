import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import VirtualCard from "./components/VirtualCardSection/VirtualCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <VirtualCard />
    </div>
  );
}

export default App;
