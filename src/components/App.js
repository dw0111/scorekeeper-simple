import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <AppWrapper>
      <PlayerForm onAddPlayer={addPlayer} />
      {players.map(({ name, score, id }, index) => (
        <Player
          key={id}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <ButtonWrapper>
        <Button onClick={resetScores}>Reset scores</Button>
        <ResetAllButton onClick={resetAll}>Reset all</ResetAllButton>
      </ButtonWrapper>
    </AppWrapper>
  )

  function onPlus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function onMinus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function addPlayer(name) {
    setPlayers([...players, { name, score: 0, id: players.length + 1 }])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }
}

export default App

const AppWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
const ResetAllButton = styled(Button)`
  background-color: red;
  border: 1px solid mistyrose;
`
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`
