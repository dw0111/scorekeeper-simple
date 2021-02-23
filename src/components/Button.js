import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ text, onClick }) {
  return (
    <ButtonElement className="Button" onClick={onClick}>
      {text}
    </ButtonElement>
  )
}

const ButtonElement = styled.button`
  padding: 5px;
  background: #bbb;
`
