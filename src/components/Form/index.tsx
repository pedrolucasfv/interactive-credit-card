import Select from 'components/Select'
import TextField from 'components/TextField'
import { useState } from 'react'
import * as S from './styles'

export type FormProps = {
  onCard: (value: string) => void
}

const Form = ({ onCard }: FormProps) => {
  const [active, setActive] = useState('')
  return (
    <S.Wrapper>
      <S.CardNumber>
        <TextField label="Card Number" labelFor="cardnumber" onCard={onCard} />
      </S.CardNumber>
      <S.CardHolder>
        <TextField label="Card Holder" labelFor="cardholder" />
      </S.CardHolder>
      <S.Content>
        <S.ExpDate>
          <S.Title>Expiration Date</S.Title>
          <S.Select>
            <Select
              items={[
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12'
              ]}
              title="Month"
            />
            <Select
              items={[
                '2023',
                '2024',
                '2025',
                '2026',
                '2027',
                '2028',
                '2029',
                '2030'
              ]}
              title="Year"
            />
          </S.Select>
        </S.ExpDate>
        <S.Cvv>
          <TextField label="CVV" labelFor="cvv" />
        </S.Cvv>
      </S.Content>
      <S.Button>Submit</S.Button>
    </S.Wrapper>
  )
}
export default Form
