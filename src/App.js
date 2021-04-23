import Search from "./pages/Search";
import Profile from "./pages/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true}>
              <Search title="Search Devs" />
            </Route>

            <Route path="/profile/:username">
              <Profile />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
