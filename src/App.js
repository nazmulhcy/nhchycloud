import Temp from "./components/Temp";
import CurrDate from "./components/CurrDate";
import Use from "./components/Use";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Temp />

      <div className="d">
        {" "}
        <CurrDate />
      </div>

      <h2>Thank You</h2>

      <Use />
    </div>
  );
};

export default App;
