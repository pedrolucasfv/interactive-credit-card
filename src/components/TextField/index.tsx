import React, { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onCard?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  type?: 'text' | 'number'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  type = 'text',
  onCard,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onCard && onCard(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type={type} onChange={onChange} value={value} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
