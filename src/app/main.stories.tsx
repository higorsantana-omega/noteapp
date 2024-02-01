import type { Meta, StoryObj } from '@storybook/react'

import { Main } from './Main'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Main> = {
  component: Main
}

export default meta
type Story = StoryObj<typeof Main>

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  }
}
