import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background: linear-gradient(
    to bottom left,
    #282828,
    #212121,
    #1a1a1a,
    #131313,
    #0a0a0a
  );
  color: white;
  width: 50rem;
  height: 30rem;
  display: grid;
  grid-template-columns: 13rem 24rem 9rem;
  grid-template-rows: 7rem 12rem 7rem;
  padding: 2rem;
  border-radius: 1rem;
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
    height: 100%;
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
