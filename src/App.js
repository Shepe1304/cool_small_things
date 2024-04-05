import { Route, Routes } from "react-router";
import LandingPage from "./components/LandingPage";
import Words from "./components/slide-animation/Words";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="*"
          element={
            <>
              <LandingPage />
            </>
          }
        />
        <Route
          exact
          path="/words-sliding-intro"
          element={
            <>
              <Words />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
