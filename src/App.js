import React, { useState } from "react";
import { Router } from "@reach/router";
// pages
import Home from "./pages/Home";
import BadgeMaker from "./pages/BadgeMaker";

const defaultLogoSettings = {
  Hairdo: "hair1",
  Skin: "#deaa87",
  Pants: "#c71303",
  Trim: "#fbfbf0",
};
// Pants: "#c71303",

function App() {
  const [logoSettings, setLogoSettings] = useState(defaultLogoSettings);

  return (
    <div>
      <Router>
        <Home path="/" logoSettings={logoSettings} />
        <BadgeMaker
          path="/badge"
          logoSettings={logoSettings}
          setLogoSettings={setLogoSettings}
        />
      </Router>
    </div>
  );
}

export default App;
