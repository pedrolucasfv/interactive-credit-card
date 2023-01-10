import Select from 'components/Select'
import * as S from './styles'

const Form = () => (
  <S.Wrapper>
    <S.CardNumber>
      Card Number
      <input />
    </S.CardNumber>
    <S.CardHolder>
      Card Holder
      <input />
    </S.CardHolder>
    <S.Content>
      <S.ExpDate>
        Expiration Date
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
          value="5"
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
          value="5"
        />
      </S.ExpDate>
      <S.Cvv>
        CVV
        <input />
      </S.Cvv>
    </S.Content>
    <S.Button>Submit</S.Button>
  </S.Wrapper>
)

export default Form
