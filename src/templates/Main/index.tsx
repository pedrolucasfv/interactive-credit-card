import Card from 'components/Card'
import Form from 'components/Form'
import { useEffect, useState } from 'react'
import * as S from './styles'

const Main = () => {
  const [numberCard, setNumberCard] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [cvv, setCvv] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const [isNumberCard, setIsNumberCard] = useState(false)
  const [isCardHolder, setIsCardHolder] = useState(false)
  const [isCvv, setIsCvv] = useState(false)

  const [selected, setSelected] = useState('')

  const onInput = (value: string) => {
    if (selected == 'cardNumber') setNumberCard(value)
    else if (selected == 'cardHolder') setCardHolder(value)
    else if (selected == 'cvv') setCvv(value)
  }
  const onSelected = (value: string) => {
    setSelected(value)
  }
  const onExpDate = (value: string) => {
    if (value.length > 2) setYear(value)
    else setMonth(value)
  }
  useEffect(() => {
    function select() {
      if (selected == 'cardNumber') {
        setIsNumberCard(true)
        setIsCardHolder(false)
        setIsCvv(false)
      } else if (selected == 'cardHolder') {
        setIsNumberCard(false)
        setIsCardHolder(true)
        setIsCvv(false)
      } else if (selected == 'cvv') {
        setIsNumberCard(false)
        setIsCardHolder(false)
        setIsCvv(true)
      }
    }
    select()
  }, [selected])
  return (
    <S.Wrapper>
      <S.Content>
        <S.Card>
          <Card
            numberCard={numberCard}
            cardHolder={cardHolder}
            expMonth={month}
            expYear={year}
            cvv={cvv}
            cardHolderSelected={isCardHolder}
            cvvSelected={isCvv}
            numberSelected={isNumberCard}
          />
        </S.Card>
        <S.Form>
          <Form
            onExpDate={onExpDate}
            onCard={onInput}
            onSelected={onSelected}
          />
        </S.Form>
      </S.Content>
    </S.Wrapper>
  )
}
export default Main
