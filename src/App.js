import React, { useState } from "react";
import { Router, Location } from "@reach/router";
// pages
import { Home } from "./pages/Home";
import { BadgeMaker } from "./pages/BadgeMaker";
import { Application } from "./pages/Application";

const defaultLogoSettings = {
  Hairdo: "hair1",
  Skin: "#deaa87",
  Pants: "#c71303",
  Trim: "#fbfbf0",
};
// Pants: "#c71303",

class OnRouteChangeWorker extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.action();
    }
  }

  render() {
    return null;
  }
}

const OnRouteChange = ({ action }) => (
  <Location>
    {({ location }) => (
      <OnRouteChangeWorker location={location} action={action} />
    )}
  </Location>
);

function App() {
  const [logoSettings, setLogoSettings] = useState(defaultLogoSettings);

  return (
    <>
      <Router>
        <Home path="/" logoSettings={logoSettings} />
        <Application path="/application" logoSettings={logoSettings} />
        <BadgeMaker
          path="/badge"
          logoSettings={logoSettings}
          setLogoSettings={setLogoSettings}
        />
      </Router>

      <OnRouteChange
        action={() => {
          window.scrollTo(0, 0);
        }}
      />
    </>
  );
}

export default App;
