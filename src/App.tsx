import { useState } from "react";

import reactLogo from "./assets/react.svg";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img alt="Vite logo" className="logo" src="/vite.svg" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1>
        <span className="text-turquoise-200">Vite</span> +{" "}
        <span className="text-turquoise-500">React</span>
      </h1>
      <div className="p-2">
        <button className="text-blue-500 mb-5" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-turquoise-500">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
