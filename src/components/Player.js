import styled from 'styled-components/macro'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <PlayerSection className="Player">
      {name}
      <ScoreDiv className="Player__score">
        <button onClick={onMinus}>-</button>
        <span>{score}</span>
        <button onClick={onPlus}>+</button>
      </ScoreDiv>
    </PlayerSection>
  )
}

const PlayerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ScoreDiv = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`
