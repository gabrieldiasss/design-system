import { Text, TextProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptate sapiente necessitatibus nemo consequuntur tempora expedita consequatur, obcaecati ratione quae, iste velit. Hic vel quas ducimus ipsum, omnis maiores minus',
  },
  argTypes: {
    size: {
      options: ["xxs", "xs", "sm", 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
