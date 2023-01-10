import * as S from './styles'
import { useState } from 'react'
export type SelectProps = {
  title: string
  items: string[]
  value?: string
}
const Select = ({ items, title, value }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.SelectBox onClick={() => setIsOpen(!isOpen)}>
        {value ? <S.Value>{value}</S.Value> : <S.Value>{title}</S.Value>}
      </S.SelectBox>
      {isOpen && (
        <S.Items aria-hidden={!isOpen} onClick={() => setIsOpen(false)}>
          <S.Title role="heading">{title}</S.Title>
          {items.map((item, index) => (
            <S.Option key={index}> {item} </S.Option>
          ))}
        </S.Items>
      )}
    </S.Wrapper>
  )
}

export default Select
