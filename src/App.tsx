import React from 'react';
import './App.css';
import './bulma/bulma.css'
import {ComponentRenderer} from "./Components/Renderer/ComponentRenderer";
import "./IOInterface/TrunksIO"

function App() {
  return (
      <div>
            <ComponentRenderer />
      </div>
  );
}

export default App;
