import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LovableButton } from './index'

const meta: Meta<typeof LovableButton> = {
  title: 'Lovable/LovableButton',
  component: LovableButton,
}

export default meta
type Story = StoryObj<typeof LovableButton>

export const Primary: Story = {
  args: { children: 'Получить план переноса', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Обсудить проект', variant: 'secondary' },
}

export const Dark: Story = {
  args: { children: 'Связаться', variant: 'dark' },
}
