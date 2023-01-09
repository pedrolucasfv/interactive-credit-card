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
  grid-template-columns: 10rem 25rem 15rem;
  grid-template-rows: 7rem 16rem 7rem;
`

type ImageProps = {
  src: string
}
export const Chip = styled.div`
  background: url('/img/card/chip.png');
  background-size: cover;
  height: 3rem;
  width: 3rem;
`
export const Flag = styled.div<ImageProps>`
  ${({ src }) => css`
    background: url(${src});
    background-size: cover;
    height: 3rem;
    width: 3rem;
    grid-column: 3;
  `}
`

export const Number = styled.h2`
  grid-row: 2;
  grid-column: 1/4;
`
export const CardHolder = styled.h2`
  grid-row: 3;
  grid-column: 1/3;
`
export const CardExp = styled.h2`
  grid-row: 3;
  grid-column: 3;
`
