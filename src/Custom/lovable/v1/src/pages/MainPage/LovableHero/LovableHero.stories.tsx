import type { Meta, StoryObj } from '@storybook/react-vite'
import { LovableHero } from './index'
import { lovableMockData } from '../../../lovable-context/mocks'
import heroImage from '../../../assets/hero-migration.jpg'

const meta: Meta<typeof LovableHero> = {
  title: 'Pages/MainPage/LovableHero',
  component: LovableHero,
}

export default meta

type Story = StoryObj<typeof LovableHero>

export const Default: Story = {
  args: {
    data: lovableMockData.hero,
    imageSrc: heroImage.src,
  },
}
