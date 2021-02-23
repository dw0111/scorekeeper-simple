import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'

function App() {
  const [players, setPlayers] = useState([])

  function handleAddPlayer(name) {
    setPlayers(oldPlayers => [...oldPlayers, { name, score: 0 }])
  }

  function resetAll() {
    setPlayers([])
  }

  function resetScore() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handlePlus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function handleMinus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  return (
    <AppGrid className="App">
      <PlayerForm onAddPlayer={handleAddPlayer} />
      {players.map((player, index) => (
        <Player
          name={player.name}
          score={player.score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
      ))}

      <Button text="Reset scores" onClick={resetScore}></Button>
      <Button text="Reset all" onClick={resetAll}></Button>
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
