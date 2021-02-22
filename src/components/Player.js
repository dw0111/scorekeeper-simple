import styled from 'styled-components/macro'
import Button from './Button'

export default function Player({ name, score, onMinus, onPlus }) {
  const hue = Math.min(score * 10, 100)

  return (
    <PlayerWrapper bgColor={`hsl(${hue}, 50%, 50%)`}>
      {name}
      <PlayerScore>
        <Button onClick={onMinus}>-</Button>
        <span>{score}</span>
        <Button onClick={onPlus}>+</Button>
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
