import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  padding-top: 20rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    to bottom left,
    #e3e3e3,
    #dedede,
    #e5e5e5,
    #ececec,
    #f5f5f5
  );
  color: #282828;
`
export const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 0.4rem;
  margin-top: 2rem;
`

export const CardNumber = styled.div``
export const CardHolder = styled.div``
export const Content = styled.div`
  display: flex;
`
export const ExpDate = styled.div`
  flex-grow: 1;
`
export const Select = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Cvv = styled.div`
  margin-left: 7rem;
`

export const Button = styled.a`
  margin-top: 2rem;
  background-color: rgb(0, 100, 245);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-size: 2.5rem;
`
export const Input = styled.input`
  width: 100%;
  height: 6rem;
  padding: 1.5rem;
  font-size: 2rem;
`
export const InputCvv = styled.input`
  width: 15rem;
  height: 6rem;
  padding: 1.5rem;
  font-size: 2rem;
`
