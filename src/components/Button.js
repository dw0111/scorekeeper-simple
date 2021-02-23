import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ text, onClick }) {
  return <ButtonElement onClick={onClick}>{text}</ButtonElement>
}

const ButtonElement = styled.button`
  padding: 5px 10px;
  background: #bbb;
  border: none;
  border-radius: 4px;
`
