/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LovableLayout } from './index'
import { LovableProvider } from '../../lovable-context/LovableContext'
import { lovableMockData } from '../../lovable-context/mocks'

const meta: Meta<typeof LovableLayout> = {
  title: 'Lovable/LovableLayout',
  component: LovableLayout,
  decorators: [
    (Story: React.ComponentType) => (
      <LovableProvider
        value={{
          onNavigate: (url: string) => console.log(url),
          onPrimaryCta: () => console.log('onPrimaryCta'),
          onSecondaryCta: () => console.log('onSecondaryCta'),
          data: lovableMockData,
        }}
      >
        <Story />
      </LovableProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof LovableLayout>

export const Default: Story = {
  render: () => (
    <LovableLayout>
      <div style={{ padding: '48px 32px' }}>Контент страницы будет здесь</div>
    </LovableLayout>
  ),
}
