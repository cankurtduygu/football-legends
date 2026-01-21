import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import Main from "./components/Main/Main";




function App() {

  const [search, setSearch] = useState("");


  return (
    <div className="App container">
      <Header inputValue={search} setInputValue={setSearch} />
      <Main value={search} />
    </div>
  );
}

export default App;
