import "./App.scss";
import imageTop from "./img/heading-image.webp";
import imageFooter from "./img/footer-image.webp";
import { GroceryList } from "./GroceryList";

function App() {
  return (
    <div className="wrapper">
      <img src={imageTop} alt="imgTop" width="250px" />
      <h1>Grocery list</h1>
      <GroceryList />
      <img src={imageFooter} alt="imgFooter" width="250px" />
    </div>
  );
}

export default App;
