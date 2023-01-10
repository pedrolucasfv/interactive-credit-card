import { Story, Meta } from '@storybook/react'
import Select, { SelectProps } from '.'

export default {
  title: 'Select',
  component: Select,
  args: {
    title: 'Month',
    items: ['01', '02', '03', '04', '05', '06', '07', '08']
  }
} as Meta

export const Default: Story<SelectProps> = (args) => <Select {...args} />
