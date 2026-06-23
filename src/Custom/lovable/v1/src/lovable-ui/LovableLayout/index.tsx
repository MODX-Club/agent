import { useCallback } from 'react'
import { useLovableContext } from '../../lovable-context/LovableContext'
import { LovableFooter } from '../LovableFooter'
import { LovableHeader } from '../LovableHeader'
import { LovableLayoutMainStyled, LovableLayoutStyled } from './styles'
import type { LovableLayoutProps } from './types'

export const LovableLayout: React.FC<LovableLayoutProps> = ({ children }) => {
  const { data, onNavigate, onPrimaryCta, onSecondaryCta } = useLovableContext()

  return (
    <LovableLayoutStyled>
      <LovableHeader
        brandName={data.brand.name}
        nav={data.nav}
        ctaLabel={data.ctaLabel}
        docsLabel={data.docsLabel}
        onNavigate={onNavigate}
        onCtaClick={onPrimaryCta}
        onDocsClick={onSecondaryCta}
        onLogoClick={useCallback(() => onNavigate?.('#top'), [onNavigate])}
      />
      <LovableLayoutMainStyled>{children}</LovableLayoutMainStyled>
      <LovableFooter
        brandName={data.brand.name}
        description={data.footer.description}
        columns={data.footer.columns}
        copyright={data.footer.copyright}
        onNavigate={onNavigate}
      />
    </LovableLayoutStyled>
  )
}
