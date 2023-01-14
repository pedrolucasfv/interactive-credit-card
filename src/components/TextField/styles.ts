import styled from 'styled-components'

export const InputWrapper = styled.div`
  height: 6rem;
  margin-top: 0.6rem;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 0.2rem;
  padding: 0 1rem;
  border: 0.2rem solid;
  border-color: lightgray;

  &:focus-within {
    box-shadow: 0 0 0.3rem darkblue;
  }
`

export const Input = styled.input`
  width: 100%;
  color: black;
  font-size: 2rem;
  padding: 0.6rem 0;
  background: transparent;
  border: 0;
  outline: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const Label = styled.label`
  font-size: 1.6rem;
  color: black;
  cursor: pointer;
`

export const Wrapper = styled.div``
