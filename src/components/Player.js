import styled from 'styled-components/macro'
import Button from './Button'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <PlayerSection>
      {name}
      <ScoreDiv color={Math.min(140, Math.max(0, score * 7))}>
        <Button onClick={onMinus} text={'-'} />
        <span>{score}</span>
        <Button onClick={onPlus} text={'+'} />
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

  span {
    ${({ color }) => 'color: hsl(' + color + ', 50%, 50%);'}
  }
`
