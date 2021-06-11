import "./App.css";
import { MoviesData } from "./Components/MoviesData";
import Home from "./Components/Home/Home";
import { Route } from "react-router";
import Details from './Components/Details/Details'


function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Home MoviesData={MoviesData} />} />
      <Route
        exact
        path="/Details/:id"
        render={(defaultProps) => (
          <Details {...defaultProps} MoviesData={MoviesData} />
        )}
      />
    </div>
  );
}

export default App;
