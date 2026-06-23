import { LovableContainer } from '../../../lovable-ui/LovableContainer'
import { LovableButton } from '../../../lovable-ui/LovableButton'
import { PageSection } from '../styles'
import {
  CtaActions,
  CtaAside,
  CtaBullet,
  CtaBullets,
  CtaCard,
  CtaContent,
  CtaDescription,
  CtaEyebrow,
  CtaNote,
  CtaTitle,
} from './styles'
import type { LovableCtaProps } from './types'

export const LovableCta: React.FC<LovableCtaProps> = ({
  data,
  onPrimaryCta,
  onSecondaryCta,
}) => {
  return (
    <PageSection id="contacts">
      <LovableContainer>
        <CtaCard>
          <CtaContent>
            <CtaEyebrow>{data.eyebrow}</CtaEyebrow>
            <CtaTitle>{data.title}</CtaTitle>
            <CtaDescription>{data.description}</CtaDescription>
            <CtaActions>
              <LovableButton variant="primary" onClick={onPrimaryCta}>
                {data.primaryCta}
              </LovableButton>
              <LovableButton variant="ghost" onClick={onSecondaryCta}>
                {data.secondaryCta}
              </LovableButton>
            </CtaActions>
            <CtaNote>{data.note}</CtaNote>
          </CtaContent>

          <CtaAside>
            <CtaBullets>
              {data.bullets.map((b) => (
                <CtaBullet key={b}>{b}</CtaBullet>
              ))}
            </CtaBullets>
          </CtaAside>
        </CtaCard>
      </LovableContainer>
    </PageSection>
  )
}
