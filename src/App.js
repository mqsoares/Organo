import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Team } from "./components/Team";

function App() {
  const teams = [
    {
      name: 'Programação',
      colorPrimary: '#57c278',
      colorSecondary: '#D9F7E9'
    },
    {
      name: 'Front-End',
      colorPrimary: '#82CFFA',
      colorSecondary: '#E8F8FF'
    },
    {
      name: 'Data Science',
      colorPrimary: '#A6D157',
      colorSecondary: '#F0F8E2'
    },
    {
      name: 'Devops',
      colorPrimary: '#E06B69',
      colorSecondary: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      colorPrimary: '#DB6EBF',
      colorSecondary: '#FAE9F5'
    },
    {
      name: 'Mobile',
      colorPrimary: '#FFBA05',
      colorSecondary: '#FFF5D9'
    },
    {
      name: 'Ivovação e Gestão',
      colorPrimary: '#FF8A29',
      colorSecondary: '#FFEEDF'
    },
  ]

  const [players, setPlayers] = useState([])

  const newInsertPlayer = (player) => {
    // console.log(player)
    setPlayers([...players, player])
  }
  
  return (
    <div className="App">
      <Banner />
      <Form teamsNames={teams.map(team => team.name)} whenInsertPlayer={player => newInsertPlayer(player)}/>
      {teams.map(team => <Team 
        key={team.name} 
        teamName={team.name} 
        colorPrimary={team.colorPrimary} 
        colorSecondary={team.colorSecondary}
        players={players.filter(player => player.team === team.name)}
      />)}
    </div>
  );
}

export default App;
