import * as S from './styles'
import { useState } from 'react'
export type SelectProps = {
  title: string
  items: string[]
}
const Select = ({ items, title }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.SelectBox onClick={() => setIsOpen(!isOpen)}>
        <S.Title role="heading">{title}</S.Title>
      </S.SelectBox>
      {isOpen && (
        <S.Items aria-hidden={!isOpen} onClick={() => setIsOpen(false)}>
          {items.map((item, index) => (
            <S.Title key={index}> {item} </S.Title>
          ))}
        </S.Items>
      )}
    </S.Wrapper>
  )
}

export default Select
