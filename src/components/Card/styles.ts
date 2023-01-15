import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  color: white;
  width: 50rem;
  height: 30rem;

  font-size: 1.6rem;
`
type SelectItem = {
  selected: boolean
}
type ImageProps = {
  src: string
}
export const Chip = styled.div`
  background: url('/img/card/chip.png');
  background-size: cover;
  height: 100%;
  width: 8.5rem;
`
export const Flag = styled.div<ImageProps>`
  ${({ src }) => css`
    background: url(${src});
    background-size: cover;
    background-position: center;
    height: 7rem;
    width: 9rem;
    grid-column: 3;
  `}
`
const borderModifier = {
  true: () => css`
    border: solid 0.5rem white;
  `
}

export const Number = styled.h2<SelectItem>`
  ${({ selected }) => css`
    grid-row: 2;
    grid-column: 1/4;
    display: flex;
    align-items: center;
    font-size: 4.3rem;
    border: none;
    ${selected && borderModifier.true()}
    animation: move 400ms;
    animation-delay: 250ms;
    animation-fill-mode: backwards;
    border
  `}
`
export const CardHolder = styled.h2<SelectItem>`
  ${({ selected }) => css`
    grid-row: 3;
    grid-column: 1/3;
    p {
      font-size: 1.5rem;
      font-weight: 400;
    }
    border: none;
    ${selected && borderModifier.true()}
  `}
`
export const CardExp = styled.h2<SelectItem>`
  ${({ selected }) => css`
    grid-row: 3;
    grid-column: 3;
    p {
      font-size: 1.5rem;
      font-weight: 400;
    }
    border: none;
    ${selected && borderModifier.true()}
  `}
`

export const FrontCard = styled.div`
  display: grid;
  grid-template-columns: 13rem 24rem 9rem;
  grid-template-rows: 7rem 12rem 7rem;
  padding: 2rem;
  border-radius: 1rem;
  background: linear-gradient(
    to bottom left,
    #282828,
    #212121,
    #1a1a1a,
    #131313,
    #0a0a0a
  );
  @keyframes loading {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
  animation: loading 1.2s linear normal;
`
export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  height: 100%;
  border-radius: 1rem;
  background: linear-gradient(
    to bottom left,
    #282828,
    #212121,
    #1a1a1a,
    #131313,
    #0a0a0a
  );
  @keyframes loading {
    0% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(0);
    }
  }
  animation: loading 1.2s linear normal;
`

export const Cvv = styled.div`
  margin: 0 2rem;
  p {
    margin-left: 1rem;
  }
`

export const CvvNumber = styled.h4`
  background-color: white;
  width: 47rem;
  border-radius: 0.3rem;
  height: 5rem;
  color: black;
  display: flex;
  align-items: center;
  padding: 2rem;
  margin-top: 0.8rem;
`

export const BlackLine = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 5rem;
  width: 100%;
  margin-top: 1.5rem;
`
export const BackFlag = styled.div`
  margin-right: 2rem;
  margin-bottom: 1rem;
`
