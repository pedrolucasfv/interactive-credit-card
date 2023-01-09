import * as S from './styles'

export type CardProps = {
  numberCard: string
  cardHolder: string
  expMonth: string
  expYear: string
  cvv: string
}

const Card = ({ cardHolder, expMonth, expYear, numberCard }: CardProps) => (
  <S.Wrapper>
    <S.Chip />
    <S.Flag src="/img/card/mastercard.png" />
    <S.Number>{numberCard}</S.Number>
    <S.CardHolder>{cardHolder}</S.CardHolder>
    <S.CardExp>
      {expMonth}/{expYear}
    </S.CardExp>
  </S.Wrapper>
)

export default Card
