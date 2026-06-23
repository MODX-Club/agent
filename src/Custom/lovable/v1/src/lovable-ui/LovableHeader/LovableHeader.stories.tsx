import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LovableHeader } from './index'
import { lovableMockData } from '../../lovable-context/mocks'

const meta: Meta<typeof LovableHeader> = {
  title: 'Lovable/LovableHeader',
  component: LovableHeader,
}

export default meta
type Story = StoryObj<typeof LovableHeader>

export const Default: Story = {
  args: {
    brandName: lovableMockData.brand.name,
    nav: lovableMockData.nav,
    ctaLabel: lovableMockData.ctaLabel,
    docsLabel: lovableMockData.docsLabel,
  },
}
