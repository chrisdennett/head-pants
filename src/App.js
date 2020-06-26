import React from "react";

import { Title } from "./comps/Title";
import { Logo } from "./comps/Logo";

function App() {
  return (
    <div>
      <header>
        <h1>
          <Title />
        </h1>
        <Logo />
      </header>
    </div>
  );
}

export default App;
