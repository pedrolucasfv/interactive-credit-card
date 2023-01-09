import * as S from './styles'

export type CardProps = {
  numberCard: string
  cardHolder: string
  expMonth: string
  expYear: string
  cvv: string
  numberSelected: boolean
  cardHolderSelected?: boolean
  expSelected?: boolean
  cvvSelected?: boolean
}

const Card = ({
  cardHolder,
  expMonth,
  expYear,
  numberCard,
  numberSelected = false,
  cardHolderSelected = false,
  expSelected = false
}: CardProps) => {
  return (
    <S.Wrapper>
      <S.Chip />
      <S.Flag src="/img/card/mastercard.png" />
      <S.Number selected={numberSelected}>
        {numberCard && numberCard}
        {!numberCard && '#### #### #### ####'}
      </S.Number>
      <S.CardHolder selected={cardHolderSelected}>
        <p>Card Holder</p>
        {cardHolder && cardHolder}
        {!cardHolder && 'João Candinha'}
      </S.CardHolder>
      <S.CardExp selected={expSelected}>
        <p>Expires</p>
        {expMonth && expMonth}
        {!expMonth && 'MM'}/{expYear && expYear}
        {!expYear && 'YY'}
      </S.CardExp>
    </S.Wrapper>
  )
}
export default Card
