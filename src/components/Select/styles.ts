import styled from 'styled-components'

export const Wrapper = styled.main`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
`

export const Title = styled.div``

export const SelectBox = styled.div`
  height: 5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
`
export const Items = styled.div`
  margin-top: 0.5rem;
  padding: 1.5rem;

  animation: clickAnimation 0.3s forwards;

  @keyframes clickAnimation {
    from {
      height: 0;
    }
    to {
      height: 17rem;
    }
  }
`
