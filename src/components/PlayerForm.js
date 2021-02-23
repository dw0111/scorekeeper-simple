import React from 'react'
import styled from 'styled-components'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <Form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        Add player:
        <br />
        <input name="player" placeholder="Player name" />
      </label>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const Form = styled.form`
  input {
    border: 2px solid #bbb;
    width: 100%;
  }
`
