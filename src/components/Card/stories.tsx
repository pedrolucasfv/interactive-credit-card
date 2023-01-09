import { Story, Meta } from '@storybook/react'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    numberCard: '2231 5003 2736 2706',
    cardHolder: 'Pedro Lucas Ferreira Vieira',
    expMonth: '07',
    expYear: '96',
    cvv: '0794'
  }
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />
