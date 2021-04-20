import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["movies/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
