import Card from 'components/Card'
import Form from 'components/Form'
import { useState } from 'react'
import * as S from './styles'

const Main = () => {
  const [numberCard, setNumberCard] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [cvv, setCvv] = useState('')

  const [selected, setSelected] = useState('')

  const onInput = (value: string) => {
    if (selected == 'cardNumber') setNumberCard(value)
    else if (selected == 'cardHolder') setCardHolder(value)
    else if (selected == 'cvv') setCvv(value)
    console.log(selected)
    console.log(value)
  }
  const onSelected = (value: string) => {
    setSelected(value)
    console.log(value)
  }
  return (
    <S.Wrapper>
      <S.Content>
        <S.Card>
          <Card
            numberCard={numberCard}
            cardHolder={cardHolder}
            expMonth="02"
            expYear="12"
            cvv={cvv}
          />
        </S.Card>
        <S.Form>
          <Form onCard={onInput} onSelected={onSelected} />
        </S.Form>
      </S.Content>
    </S.Wrapper>
  )
}
export default Main
