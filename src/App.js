import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Input } from "./components/InputsTxt";

function App() {
  const [players, setPlayers] = useState([])

  const newInsertPlayer = (player) => {
    console.log(player)
    setPlayers([...players, player])
  }
  
  return (
    <div className="App">
      <Banner />
      <Form whenInsertPlayer={player => newInsertPlayer(player)}/>
    </div>
  );
}

export default App;
