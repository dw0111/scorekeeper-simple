import styled from 'styled-components/macro'

export default function Player({ name, score, onMinus, onPlus }) {
  const hue = Math.min(score * 10, 100)

  return (
    <PlayerWrapper bgColor={`hsl(${hue}, 50%, 50%)`}>
      {name}
      <PlayerScore>
        <button onClick={onMinus}>-</button>
        <span>{score}</span>
        <button onClick={onPlus}>+</button>
      </PlayerScore>
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.bgColor || 'white'};
`
const PlayerScore = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`
