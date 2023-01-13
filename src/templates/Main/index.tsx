import Card from 'components/Card'
import Form from 'components/Form'
import { useState } from 'react'
import * as S from './styles'

const Main = () => {
  const [numberCard, setNumberCard] = useState('')
  const onInput = (value: string, type: string) => {
    setA(value)
  }
  return (
    <S.Wrapper>
      <S.Content>
        <S.Card>
          <Card
            numberCard="0000 0000 0000 0000"
            cardHolder="tukinha"
            expMonth="02"
            expYear="12"
            cvv="12"
          />
        </S.Card>
        <S.Form>
          <Form onCard={onInput} />
        </S.Form>
      </S.Content>
    </S.Wrapper>
  )
}
export default Main
