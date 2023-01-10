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
    <S.ExpDate></S.ExpDate>
  </S.Wrapper>
)

export default Form
