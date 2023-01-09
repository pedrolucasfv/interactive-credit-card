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
  cvv,
  numberSelected = false,
  cardHolderSelected = false,
  expSelected = false,
  cvvSelected = false
}: CardProps) => {
  return (
    <S.Wrapper>
      {!cvvSelected && (
        <S.FrontCard>
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
        </S.FrontCard>
      )}
      {cvvSelected && (
        <S.BackCard>
          <S.BlackLine />
          <S.Cvv>
            <p>CVV</p> <S.CvvNumber>{cvv}</S.CvvNumber>
          </S.Cvv>
          <S.BackFlag>
            <S.Flag src="/img/card/mastercard.png" />
          </S.BackFlag>
        </S.BackCard>
      )}
    </S.Wrapper>
  )
}
export default Card
