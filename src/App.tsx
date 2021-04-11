import "./App.css";
import { NavigationBar } from "./components/NavigationBar/NavigationBar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <div className="grid grid-cols-7">
          <div className="col-start-2 col-end-7">
            <Router>
                <NavigationBar />
            </Router>
          </div>
      </div>
  );
}

export default App;
