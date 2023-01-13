import Select from 'components/Select'
import TextField from 'components/TextField'
import * as S from './styles'

export type FormProps = {
  onCard: (value: string) => void
  onSelected: (value: string) => void
}

const Form = ({ onCard, onSelected }: FormProps) => {
  return (
    <S.Wrapper>
      <S.CardNumber onClick={() => onSelected('cardNumber')}>
        <TextField
          label="Card Number"
          labelFor="cardnumber"
          onCard={onCard}
          type="number"
        />
      </S.CardNumber>
      <S.CardHolder onClick={() => onSelected('cardHolder')}>
        <TextField label="Card Holder" labelFor="cardholder" onCard={onCard} />
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
        <S.Cvv onClick={() => onSelected('cvv')}>
          <TextField label="CVV" labelFor="cvv" onCard={onCard} type="number" />
        </S.Cvv>
      </S.Content>
      <S.Button>Submit</S.Button>
    </S.Wrapper>
  )
}
export default Form
