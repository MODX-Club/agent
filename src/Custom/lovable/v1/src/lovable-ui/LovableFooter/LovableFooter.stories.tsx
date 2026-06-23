import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LovableFooter } from './index'
import { lovableMockData } from '../../lovable-context/mocks'

const meta: Meta<typeof LovableFooter> = {
  title: 'Lovable/LovableFooter',
  component: LovableFooter,
}

export default meta
type Story = StoryObj<typeof LovableFooter>

export const Default: Story = {
  args: {
    brandName: lovableMockData.brand.name,
    description: lovableMockData.footer.description,
    columns: lovableMockData.footer.columns,
    copyright: lovableMockData.footer.copyright,
  },
}
