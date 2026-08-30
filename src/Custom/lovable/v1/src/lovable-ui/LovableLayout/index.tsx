import { useLovableContext } from '../../lovable-context/LovableContext'
import { LovableFooter } from '../LovableFooter'
import { LovableHeader } from '../LovableHeader'
import { LovableLayoutMainStyled, LovableLayoutStyled } from './styles'

export const LovableLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { data, onPrimaryCta } = useLovableContext()

  return (
    <LovableLayoutStyled>
      <LovableHeader
        brandName={data.brand.name}
        nav={data.nav}
        ctaLabel={data.ctaLabel}
        onCtaClick={onPrimaryCta}
      />
      <LovableLayoutMainStyled>{children}</LovableLayoutMainStyled>
      <LovableFooter
        brandName={data.brand.name}
        description={data.footer.description}
        columns={data.footer.columns}
        copyright={data.footer.copyright}
      />
    </LovableLayoutStyled>
  )
}
