import styled from 'styled-components'

export const Wrapper = styled.main`
  font-size: 2rem;
  font-weight: 600;
  background-color: white;
  margin-right: 2rem;
  position: relative;
`

export const Title = styled.div`
  color: gray;
  cursor: default;
`
export const Value = styled.div``

export const SelectBox = styled.div`
  padding: 1.5rem;
  border-radius: 0.4rem;
  border: 0.2rem solid gray;
  cursor: pointer;
`
export const Items = styled.div`
  background-color: white;
  padding: 1.5rem;
  padding-top: 0;
  margin-top: 0.5rem;
  animation: clickAnimation 0.3s forwards;
  border: 0.2rem solid gray;
  position: absolute;

  @keyframes clickAnimation {
    from {
      height: 0;
    }
    to {
      height: max-content;
    }
  }
`

export const Option = styled.div`
  :hover {
    color: white;
    background-color: gray;
    cursor: pointer;
  }
`
