import "./App.css";
import { Gallery } from "./components/Gallery";
import paintings from "./data/paintings.json";
function App() {
  console.log(paintings);
  return <Gallery items={paintings} />;
}

export default App;
