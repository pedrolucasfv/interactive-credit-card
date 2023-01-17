import { useEffect, useState } from 'react'
import * as S from './styles'

export type CardProps = {
  numberCard: string
  cardHolder: string
  expMonth: string
  expYear: string
  cvv: string
  numberSelected?: boolean
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
  const [direction, setDirection] = useState(false)
  const [front, setFront] = useState(false)
  useEffect(() => {
    function directionFlip() {
      if (cvvSelected) setFront(true)
      else setFront(false)
    }
    directionFlip()
  }, [direction])

  useEffect(() => {
    function directionFlip() {
      if (cvvSelected) {
        setDirection(true)
      } else setDirection(false)
    }
    directionFlip()
  }, [cvvSelected])
  return (
    <S.Wrapper>
      {!front && (
        <S.FrontCard>
          <S.Chip />
          <S.Flag src="/img/card/mastercard.png" />
          <S.Number id="cardnumber" selected={numberSelected}>
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
            {!expMonth && 'MM'}/{expYear && expYear.slice(2)}
            {!expYear && 'YY'}
          </S.CardExp>
        </S.FrontCard>
      )}
      {front && (
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
