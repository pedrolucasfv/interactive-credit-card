import Select from 'components/Select'
import * as S from './styles'

const Form = () => (
  <S.Wrapper>
    <S.CardNumber>
      <S.Title>Card Number</S.Title>
      <S.Input />
    </S.CardNumber>
    <S.CardHolder>
      <S.Title>Card Holder</S.Title>
      <S.Input />
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
        <S.Title>CVV</S.Title>
        <S.InputCvv />
      </S.Cvv>
    </S.Content>
    <S.Button>Submit</S.Button>
  </S.Wrapper>
)

export default Form
